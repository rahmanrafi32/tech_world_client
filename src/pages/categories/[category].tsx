import {useRouter} from "next/router";
import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {FeaturedProduct} from "@/types";
import {GetStaticPaths, GetStaticProps} from "next";
import ProductCards from "@/components/UI/ProductCards";

type IProps = {
    productsByCategory: FeaturedProduct[]
}
const Category = ({productsByCategory}: IProps) => {
    const {query} = useRouter()
    return (
        <div className={'container mx-auto h-full mt-5 mb-10 flex flex-col items-center'}>
            <h1 className={'text-2xl lg:text-5xl mb-12'}>Category: {query.category}</h1>
            <ProductCards featuredProducts={productsByCategory}/>
        </div>
    );
};

export default Category;

Category.getLayout = function getLayout(page: ReactElement) {
    return (<RootLayout>{page}</RootLayout>)
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await fetch(`https://tech-world-server.vercel.app/api/v1/products`);
    const allProducts = await products.json()
    const paths = allProducts?.data?.map((product: FeaturedProduct) => ({params: {category: product.category}}))
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context
    const products = await fetch(`https://tech-world-server.vercel.app/api/v1/products/categories/${params?.category}`);
    const productsById = await products.json()

    return {
        props: {
            productsByCategory: productsById.data
        },
    };
}
