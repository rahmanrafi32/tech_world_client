import {FeaturedProduct} from "@/data";
import Image from "next/image";
import Link from "next/link";

type IProps = {
    featuredProducts: FeaturedProduct[]
}
const ProductCards = ({featuredProducts}: IProps) => {
    return (
        <div className={'grid lg:grid-cols-3 gap-4 sm:grid-cols-1'}>
            {
                featuredProducts.map(product =>
                    <div className="card bg-base-100 shadow-xl lg:w-96 mx-2" key={product?.productName}>
                        <Link href={`/product-details/${product?._id}`}>
                            <figure>
                                <Image
                                    src={product?.image}
                                    alt={product?.productName}
                                    className={'p-4'}
                                    width={200}
                                    height={200}
                                />
                            </figure>
                        </Link>
                        <div className="card-body">
                            <Link href={`/product-details/${product?._id}`}>
                                <h2 className="card-title">{product.productName}</h2>
                                <h2 className="card-title">Category: {product.category}</h2>
                                <h2 className="card-title">Price: {product.price}</h2>
                                <h2 className="card-title">Status: {product.status}</h2>
                                <h2 className="card-title">Rating: {product.rating}</h2>
                            </Link>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary min-w-full">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ProductCards;
