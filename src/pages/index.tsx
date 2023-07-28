import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import Banner from "@/components/Banner";
import AllFeaturedProducts from "@/components/AllFaeturedProducts";
import FeaturedCategories from "@/components/FeaturedCategories";
import {GetStaticProps} from "next";
import {FeaturedProduct} from "@/data";

type IProps = {
    allProducts: FeaturedProduct[]
}
const Home = ({allProducts}: IProps) => {
    return (
        <div className={'container mx-auto'}>
            <div className={'flex justify-center mt-5'}>
                <Banner/>
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
    const products = await fetch('http://localhost:8080/api/v1/products');
    const allProducts = await products.json()
    return {
        props: {
            allProducts: allProducts.data
        },
    };
}

export default Home;
