import CategoryCards from "@/components/UI/CategoryCards";
import {featuredCategories} from "@/data";

const FeaturedCategories = () => {
    return (
        <div className={'flex flex-col items-center mt-28 mb-10'}>
            <h1 className={'text-3xl lg:text-5xl'}>Featured Category</h1>
            <p className={'text-md lg:text-xl mt-3 mb-10 text-center'}>Get Your Desired Product from Featured Category!</p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3">
                <CategoryCards featuredCategories={featuredCategories}/>
            </div>
        </div>
    );
};

export default FeaturedCategories;
