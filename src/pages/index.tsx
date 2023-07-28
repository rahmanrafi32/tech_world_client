import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import Banner from "@/components/Banner";
import ProductCards from "@/components/UI/ProductCards";
import AllFeaturedProducts from "@/components/AllFaeturedProducts";
import CategoryCards from "@/components/UI/CategoryCards";
import FeaturedCategories from "@/components/FeaturedCategories";

export default function Home() {
    return (
        <div className={'container mx-auto'}>
            <div className={'flex justify-center mt-5'}>
                <Banner/>
            </div>
            <div className={'flex flex-col items-center mb-4'}>
                <AllFeaturedProducts/>
                <FeaturedCategories/>
            </div>
        </div>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (<RootLayout>{page}</RootLayout>)
}
