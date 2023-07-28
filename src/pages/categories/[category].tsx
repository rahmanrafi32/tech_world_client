import {useRouter} from "next/router";
import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {FeaturedProduct} from "@/data";
import {GetStaticPaths, GetStaticProps} from "next";
import ProductCards from "@/components/UI/ProductCards";

type IProps = {
    productsByCategory: FeaturedProduct[]
}
const Category = ({productsByCategory}: IProps) => {
    const {query} = useRouter()
    return (
        <div className={'container mx-auto h-screen mt-5 mb-10 flex flex-col items-center'}>
            <h1 className={'text-2xl lg:text-5xl mb-5'}>Category: {query.category}</h1>
            <div className={'grid grid-cols-1 lg:grid-cols-3 gap-4'}>
                <ProductCards featuredProducts={productsByCategory}/>
            </div>
        </div>
    );
};

export default Category;

Category.getLayout = function getLayout(page: ReactElement) {
    return (<RootLayout>{page}</RootLayout>)
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await fetch(`http://localhost:8080/api/v1/products`);
    const allProducts = await products.json()
    const paths = allProducts?.data?.map((product: FeaturedProduct) => ({params: {category: product.category}}))
    return {
        paths, fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context
    const products = await fetch(`http://localhost:8080/api/v1/products/categories/${params?.category}`);
    const productsByCategory = await products.json()
    return {
        props: {
            productsByCategory: productsByCategory.data
        },
    };
}
