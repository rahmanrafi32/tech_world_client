import {useRouter} from "next/router";
import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {FeaturedProduct} from "@/types";
import {GetServerSideProps} from "next";
import dynamic from 'next/dynamic'

type IProps = {
    productsByCategory: FeaturedProduct[]
}
const Category = ({productsByCategory}: IProps) => {
    const {query} = useRouter()
    const DynamicCard = dynamic(() => import('@/components/UI/ProductCards'), {
        loading: () => <div className={'h-screen'}><span className="loading loading-spinner loading-lg"></span></div>})
    return (
        <div className={'container mx-auto h-full mt-5 mb-10 flex flex-col items-center'}>
            <h1 className={'text-2xl lg:text-5xl mb-12'}>Category: {query.category}</h1>
            <DynamicCard featuredProducts={productsByCategory}/>
        </div>
    );
};

export default Category;

Category.getLayout = function getLayout(page: ReactElement) {
    return (<RootLayout>{page}</RootLayout>)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {params} = context
    const res = await fetch(`https://tech-world-server.vercel.app/api/v1/products/categories/${params?.category}`)
    const data = await res.json()
    return {
        props: {
            productsByCategory: data.data
        },
    }
}
