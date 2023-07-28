import {featuredProducts} from "@/data";
import ProductCards from "@/components/UI/ProductCards";

const AllFeaturedProducts = () => {
    return (
        <div className={'flex flex-col items-center'}>
            <h1 className={'lg:text-5xl'}>Featured Products</h1>
            <p className={'lg:text-xl mt-3 mb-10'}>Check & Get Your Desired Product!</p>
            <ProductCards featuredProducts={featuredProducts}/>
        </div>
    );
};

export default AllFeaturedProducts;
