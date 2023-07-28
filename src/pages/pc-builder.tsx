import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {featuredCategories} from "@/data";
import CategoryCards from "@/components/UI/CategoryCards";
import Link from "next/link";

const PcBuilder = () => {
    return (
        <div className={'container mx-auto h-full flex flex-col items-center mt-16 mb-28'}>
            <h1 className={'lg:text-3xl'}>Build Your Dream Pc With Us</h1>
            <h6 className={'text-2xl font-medium mt-5'}>Categories</h6>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <CategoryCards featuredCategories={featuredCategories} showButton={true}/>
            </div>

            <div className={'bg-base-100 shadow-md w-3/4 h-24 p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between">
                    <h1 className={'text-xl font-medium'}>CPU</h1>
                    <Link href={'/categories/Cpu'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className={'flex justify-center items-center'}>
                        <h1>Image</h1>
                        <h1 className={'text-xl font-medium'}>CPU Name</h1>
                    </div>
                    <h1 className={'text-xl font-medium'}>Price</h1>
                </div>
            </div>

            <div className={'bg-base-100 shadow-md w-3/4 h-24 p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between">
                    <h1 className={'text-xl font-medium'}>Motherboard</h1>
                    <Link href={'/categories/Motherboard'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className={'flex justify-center items-center'}>
                        <h1>Image</h1>
                        <h1 className={'text-xl font-medium'}>CPU Name</h1>
                    </div>
                    <h1 className={'text-xl font-medium'}>Price</h1>
                </div>
            </div>

            <div className={'bg-base-100 shadow-md w-3/4 h-24 p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between">
                    <h1 className={'text-xl font-medium'}>RAM</h1>
                    <Link href={'/categories/RAM'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className={'flex justify-center items-center'}>
                        <h1>Image</h1>
                        <h1 className={'text-xl font-medium'}>CPU Name</h1>
                    </div>
                    <h1 className={'text-xl font-medium'}>Price</h1>
                </div>
            </div>

            <div className={'bg-base-100 shadow-md w-3/4 h-24 p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between">
                    <h1 className={'text-xl font-medium'}>Power Supply Unit</h1>
                    <Link href={'/categories/Power Supply Unit'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className={'flex justify-center items-center'}>
                        <h1>Image</h1>
                        <h1 className={'text-xl font-medium'}>CPU Name</h1>
                    </div>
                    <h1 className={'text-xl font-medium'}>Price</h1>
                </div>
            </div>

            <div className={'bg-base-100 shadow-md w-3/4 h-24 p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between">
                    <h1 className={'text-xl font-medium'}>Storage Device</h1>
                    <Link href={'/categories/Storage Device'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className={'flex justify-center items-center'}>
                        <h1>Image</h1>
                        <h1 className={'text-xl font-medium'}>CPU Name</h1>
                    </div>
                    <h1 className={'text-xl font-medium'}>Price</h1>
                </div>
            </div>

            <div className={'bg-base-100 shadow-md w-3/4 h-24 p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between">
                    <h1 className={'text-xl font-medium'}>Monitor</h1>
                    <Link href={'/categories/Monitor'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className={'flex justify-center items-center'}>
                        <h1>Image</h1>
                        <h1 className={'text-xl font-medium'}>CPU Name</h1>
                    </div>
                    <h1 className={'text-xl font-medium'}>Price</h1>
                </div>
            </div>
            <button className={'btn btn-primary w-56 mt-12'}>Complete Build</button>
        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page: ReactElement) {
    return (<RootLayout>{page}</RootLayout>)
}
