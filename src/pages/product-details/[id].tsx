import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {GetStaticPaths, GetStaticProps} from "next";
import {FeaturedProduct} from "@/data";
import Image from "next/image";

const ProductDetails = ({productsById}:any) => {
    return (
        <div className={'container mx-auto h-full w-screen flex justify-center mt-28'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-5'}>
                <div>
                    <Image src={productsById.image} alt={productsById.productName} width={500} height={500}/>
                </div>
                <div className={'flex flex-col p-4 gap-2'}>
                    <h1 className={'text-2xl lg:text-3xl'}>{productsById.productName}</h1>
                    <h1 className={'text-xl mt-2'}>Category: {productsById.category}</h1>
                    <h2 className={'text-xl'}>{productsById.status}</h2>
                    <h2 className={'text-2xl'}>Description</h2>

                    <h2 className={'text-2xl mt-8'}>Key Features</h2>
                    <h2 className={'text-xl mt-3'}>Model: PRO MP223</h2>
                    <h2 className={'text-xl'}>FHD (1920 x 1080)</h2>
                    <h2 className={'text-xl'}>VA, 100Hz, 1ms</h2>
                    <h2 className={'text-xl'}>1x HDMI, 1x VGA, 1x Audio Out</h2>
                    <h2 className={'text-xl'}> Anti-Flicker Technology</h2>

                    <h2 className={'text-xl mt-3'}>Price: {productsById.price}</h2>
                    <button className={'btn btn-primary mt-10'}>Buy Now</button>
                </div>
                <div>
                    <h1 className={'text-3xl'}>Reviews</h1>
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
    const products = await fetch(`http://localhost:8080/api/v1/products`);
    const allProducts = await products.json()
    const paths = allProducts?.data?.map((product: FeaturedProduct) => ({params: {id: product._id}}))
    return {
        paths, fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context
    const products = await fetch(`http://localhost:8080/api/v1/products/product-details/${params?.id}`);
    const productsById = await products.json()
    return {
        props: {
            productsById: productsById.data
        },
    };
}

