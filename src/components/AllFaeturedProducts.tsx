import {featuredProducts} from "@/data";
import ProductCards from "@/components/UI/ProductCards";

const AllFeaturedProducts = () => {
    return (
        <>
            <ProductCards featuredProducts={featuredProducts}/>
        </>
    );
};

export default AllFeaturedProducts;
