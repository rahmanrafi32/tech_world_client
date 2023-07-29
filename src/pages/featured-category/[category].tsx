import {useRouter} from "next/router";
import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {FeaturedProduct} from "@/types";
import {GetStaticPaths, GetStaticProps} from "next";
import Link from "next/link";
import Image from "next/image";

type IProps = {
    productsByCategory: FeaturedProduct[]
}
const Category = ({productsByCategory}: IProps) => {
    const {query} = useRouter()
    return (
        <div className={'container mx-auto h-full mt-5 mb-10 flex flex-col items-center'}>
            <h1 className={'text-2xl lg:text-5xl mb-12'}>Category: {query.category}</h1>
            <div className={'grid lg:grid-cols-3 gap-4 grid-cols-1'}>
                {
                    productsByCategory?.map(product =>
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
    const products = await fetch(`https://tech-world-server.vercel.app/api/v1/products`);
    const allProducts = await products.json()
    const paths = allProducts?.data?.map((product: FeaturedProduct) => ({params: {category: product.category}}))
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context
    const products = await fetch(`https://tech-world-server.vercel.app/api/v1/products/categories/${params?.category}`);
    const productsById = await products.json()

    return {
        props: {
            productsByCategory: productsById.data
        },
    };
}
