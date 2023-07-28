import Link from "next/link";

type IProps = {
    featuredCategories: string[],
    showButton: boolean
}
const CategoryCards = ({featuredCategories, showButton}: IProps) => {
    return (
        featuredCategories.map((category, index) =>
            <div key={index} className="card bg-base-100 shadow-md lg:w-46 mx-2 mt-5 text-center hover:bg-slate-100">
                <Link href={`/categories/${category}`}>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold">{category}</h2>
                        {
                            showButton ? <button className={'btn mt-3'}>Select</button> : null
                        }
                    </div>
                </Link>
            </div>)
    );
};

export default CategoryCards;
