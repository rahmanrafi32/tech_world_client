import {useRouter} from "next/router";
import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {FeaturedProduct} from "@/data";
import Image from "next/image";
import Link from "next/link";
import {GetStaticPaths, GetStaticProps} from "next";

type IProps = {
    productsByCategory: FeaturedProduct[]
}
const Category = ({productsByCategory}: IProps) => {
    const {query} = useRouter()
    return (
        <div className={'container mx-auto h-screen mt-5 mb-10 flex flex-col items-center'}>
            <h1 className={'text-xl lg:text-5xl mb-5'}>Category: {query.category}</h1>
            <div className={'grid lg:grid-cols-3 justify-center gap-4 sm:grid-cols-1'}>
                {
                    productsByCategory?.map((product: FeaturedProduct) =>
                        <div className="card bg-base-100 shadow-xl lg:w-96 mx-2" key={product.productName}>
                            <Link href={`/product-details/${product?._id}`}>
                                <figure>
                                    <Image
                                        src={product.image}
                                        alt={product.productName}
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
        </div>
    );
};

export default Category;

Category.getLayout = function getLayout(page: ReactElement) {
    return (<RootLayout>{page}</RootLayout>)
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await fetch(`http://localhost:8080/api/v1/products`);
    const allProducts = await products.json()
    const paths = allProducts?.data?.map((product: FeaturedProduct) => ({params: {category: product.category}}))
    return {
        paths, fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context
    const products = await fetch(`http://localhost:8080/api/v1/products/categories/${params?.category}`);
    const productsByCategory = await products.json()
    return {
        props: {
            productsByCategory: productsByCategory.data
        },
    };
}
