import ProductCards from "@/components/UI/ProductCards";
import {FeaturedProduct} from "@/data";

type IProps = {
    featuredProducts: FeaturedProduct[]
}
const AllFeaturedProducts = ({featuredProducts}: IProps) => {
    return (
        <div className={'flex flex-col items-center mt-10 lg:mt-0'}>
            <h1 className={'text-3xl lg:text-5xl'}>Featured Products</h1>
            <p className={'text-md lg:text-xl mt-3 mb-10'}>Check & Get Your Desired Product!</p>
            <ProductCards featuredProducts={featuredProducts}/>
        </div>
    );
};


export default AllFeaturedProducts;
