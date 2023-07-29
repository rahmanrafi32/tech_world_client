import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {GetStaticPaths, GetStaticProps} from "next";
import {FeaturedProduct} from "@/types";
import Image from "next/image";
import {BiSolidUser} from 'react-icons/bi'

type IProps = {
    productsById: FeaturedProduct
}
const ProductDetails = ({productsById}: IProps) => {
    return (
        <div className={'container mx-auto h-full w-screen flex justify-center mt-28'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-5'}>
                <div>
                    <Image src={productsById?.image} alt={productsById?.productName} width={500} height={500}/>
                </div>
                <div className={'flex flex-col p-4 gap-2'}>
                    <h1 className={'text-2xl lg:text-3xl'}>{productsById?.productName}</h1>
                    <h1 className={'text-xl mt-2'}>Category: {productsById?.category}</h1>
                    <h2 className={'text-xl'}>{productsById?.status}</h2>
                    <h2 className={'text-2xl'}>Description</h2>
                    <h2>{productsById?.description}</h2>
                    <h2 className={'text-2xl mt-8'}>Key Features</h2>
                    <h2 className={'text-xl mt-3'}>Brand: {productsById?.features?.brand}</h2>
                    <h2 className={'text-xl'}>Model: {productsById?.features?.model}</h2>
                    <h2 className={'text-xl'}>Specification: {productsById?.features?.Specification}</h2>
                    <h2 className={'text-xl'}>Type: {productsById?.features?.Type}</h2>
                    <h2 className={'text-xl'}>Average Rating: {productsById?.avgRating}</h2>
                    <h2 className={'text-xl'}>Individual Rating: {productsById?.individualRating}</h2>


                    <h2 className={'text-xl mt-3'}>Price: {productsById?.price}</h2>
                    <button className={'btn btn-primary mt-10'}>Buy Now</button>
                </div>
                <div className={'px-4'}>
                    <h1 className={'text-3xl'}>Reviews :</h1>

                    <div className={'mt-10 flex flex-col gap-4 mb-20 '}>
                        {
                            productsById?.reviews?.map((review: string, index: number) =>
                                <div key={index} className={'flex items-center mt-2 '}>
                                    <BiSolidUser className={'text-4xl mr-4'}/>
                                    <h1 className={'text-xl'}>{review}</h1>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page: ReactElement) {
    return (<RootLayout>{page}</RootLayout>)
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await fetch(`https://tech-world-server.vercel.app/api/v1/products`);
    const allProducts = await products.json()
    const paths = allProducts?.data?.map((product: FeaturedProduct) => ({params: {id: product._id}}))
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context
    const products = await fetch(`https://tech-world-server.vercel.app/api/v1/products/product-details/${params?.id}`);
    const productsById = await products.json()
    return {
        props: {
            productsById: productsById.data
        },
    };
}

