import {useRouter} from "next/router";
import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {FeaturedProduct} from "@/types";
import {GetServerSidePropsContext} from "next";
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const {params} = context
    const res = await fetch(`http://localhost:8080/api/v1/products/categories/${params?.category}`)
    const data = await res.json()

    return {
        props: {
            productsByCategory: data.data
        },
    }
}
