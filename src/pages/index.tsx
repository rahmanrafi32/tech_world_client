import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import AllFeaturedProducts from "@/components/AllFaeturedProducts";
import FeaturedCategories from "@/components/FeaturedCategories";
import {GetStaticProps} from "next";
import {FeaturedProduct} from "@/types";
import dynamic from 'next/dynamic'


type IProps = {
    allProducts: FeaturedProduct[]
}
const Home = ({allProducts}: IProps) => {
    const DynamicBanner = dynamic(()=> import('@/components/Banner'), {
        loading: ()=> <div className={'mt-28 h-1/2 w-1/2 flex justify-center items-center'}>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    })
    return (
        <div className={'container mx-auto'}>
            <div className={'flex justify-center mt-5'}>
                <DynamicBanner/>
            </div>
            <div className={'flex flex-col items-center mb-4'}>
                <AllFeaturedProducts featuredProducts={allProducts}/>
                <FeaturedCategories/>
            </div>
        </div>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (<RootLayout>{page}</RootLayout>)
}

export const getStaticProps: GetStaticProps = async () => {
    const products = await fetch('https://tech-world-server.vercel.app/api/v1/products');
    const allProducts = await products.json()
    return {
        props: {
            allProducts: allProducts.data
        },
    };
}

export default Home;
