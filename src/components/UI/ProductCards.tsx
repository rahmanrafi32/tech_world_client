import {FeaturedProduct} from "@/data";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useAppDispatch} from "@/redux/reduxTypedHooks";
import {addCpu, addMonitor, addMotherboard, addPowerSupply, addRam, addStorage} from "@/redux/features/pcBuilderSlice";

type IProps = {
    featuredProducts: FeaturedProduct[]
}
const ProductCards = ({featuredProducts}: IProps) => {
    const {query, asPath, back} = useRouter()
    const dispatch = useAppDispatch()
    const handleBuilderButton = (product: FeaturedProduct): void => {
        switch (query.category) {
            case 'Cpu':
                dispatch(addCpu(product));
                break;
            case 'Motherboard':
                dispatch(addMotherboard(product));
                break;
            case 'RAM':
                dispatch(addRam(product));
                break;
            case 'Power Supply Unit':
                dispatch(addPowerSupply(product));
                break;
            case 'Storage Device':
                dispatch(addStorage(product));
                break;
            case 'Monitor':
                dispatch(addMonitor(product));
                break;
            default:
               break;
        }
        back()
    }
    return (
        <div className={'grid lg:grid-cols-3 gap-4 grid-cols-1'}>
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
                                <h2 className="card-title mt-3">Category: {product.category}</h2>
                                <h2 className="card-title mt-3">Price: {product.price}</h2>
                                <h2 className="card-title mt-3">Status: {product.status}</h2>
                                <h2 className="card-title mt-3">Rating: {product.rating}</h2>
                            </Link>
                            {
                                asPath !== '/' ?
                                    <button className={'btn btn-primary mt-4'}
                                            onClick={() => handleBuilderButton(product)}>Add To
                                        Builder</button> : null
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ProductCards;
