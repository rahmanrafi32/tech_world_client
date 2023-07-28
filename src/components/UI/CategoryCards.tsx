import {featuredCategories} from "@/data";

type IProps = {
    featuredCategories: string[]
}
const CategoryCards = ({featuredCategories}: IProps) => {
    return (
       featuredCategories.map((category,index)=> <div key={index} className="card bg-base-100 shadow-xl lg:w-46 mx-2 mt-5 text-center">
           <div className="card-body">
               <h2 className="text-xl font-semibold">{category}</h2>
           </div>
       </div>)
    );
};

export default CategoryCards;
