import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {featuredCategories} from "@/types";
import CategoryCards from "@/components/UI/CategoryCards";
import Link from "next/link";
import {useAppSelector} from "@/redux/reduxTypedHooks";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PcBuilder = () => {
    const {cpu, monitor, motherboard, ram, powerSupply, storage} = useAppSelector(state => state.pcBuilder)
    const notify = () => toast("Your Build is ready");
    return (
        <div className={'container mx-auto h-full flex flex-col items-center mt-16 mb-28'}>
            <h1 className={'lg:text-3xl'}>Build Your Dream Pc With Us</h1>
            <h6 className={'text-2xl font-medium mt-5'}>Categories</h6>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <CategoryCards featuredCategories={featuredCategories} showButton={true}/>
            </div>
            <div className={'bg-base-100 shadow-md w-3/4 h-full p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between mb-5">
                    <h1 className={'md:text-xl font-medium'}>CPU</h1>
                    <Link href={'/categories/Cpu'}>
                        <button className={'btn '}>Choose</button>
                    </Link>
                </div>
                {
                    cpu.productName ? (<div className="w-full flex items-center justify-between">
                        <div className={'flex justify-center items-center'}>
                            <Image className={'hidden md:block'} src={cpu.image} alt={cpu.productName} width={100} height={100}/>
                            <h1 className={'md:text-xl font-medium md:ml-3'}>{cpu.productName}</h1>
                        </div>
                        <h1 className={'md:text-xl font-medium'}>{cpu.price}</h1>
                    </div>) : null
                }
            </div>
            <div className={'bg-base-100 shadow-md w-3/4 h-full p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between mb-5">
                    <h1 className={'md:text-xl font-medium'}>Motherboard</h1>
                    <Link href={'/categories/Motherboard'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                {
                    motherboard.productName ? (<div className="w-full flex items-center justify-between">
                        <div className={'flex justify-center items-center'}>
                            <Image className={'hidden md:block'} src={motherboard.image} alt={motherboard.productName} width={100} height={100}/>
                            <h1 className={'md:text-xl font-medium md:ml-3'}>{motherboard.productName}</h1>
                        </div>
                        <h1 className={'text-xl font-medium'}>{motherboard.price}</h1>
                    </div>) : null
                }
            </div>
            <div className={'bg-base-100 shadow-md w-3/4 h-full p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between mb-5">
                    <h1 className={'md:text-xl font-medium'}>RAM</h1>
                    <Link href={'/categories/RAM'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                {
                    ram.productName ? (<div className="w-full flex items-center justify-between">
                        <div className={'flex justify-center items-center'}>
                            <Image className={'hidden md:block'} src={ram.image} alt={ram.productName} width={100} height={100}/>
                            <h1 className={'md:text-xl font-medium md:ml-3'}>{ram.productName}</h1>
                        </div>
                        <h1 className={'text-xl font-medium'}>{ram.price}</h1>
                    </div>) : null
                }
            </div>
            <div className={'bg-base-100 shadow-md w-3/4 h-full p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between mb-5">
                    <h1 className={'md:text-xl font-medium'}>Power Supply Unit</h1>
                    <Link href={'/categories/Power Supply Unit'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                {
                    powerSupply.productName ? (<div className="w-full flex items-center justify-between">
                        <div className={'flex justify-center items-center'}>
                            <Image className={'hidden md:block'} src={powerSupply.image} alt={powerSupply.productName} width={100} height={100}/>
                            <h1 className={'md:text-xl font-medium md:ml-3'}>{powerSupply.productName}</h1>
                        </div>
                        <h1 className={'text-xl font-medium'}>{powerSupply.price}</h1>
                    </div>) : null
                }
            </div>
            <div className={'bg-base-100 shadow-md w-3/4 h-full p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between mb-5">
                    <h1 className={'md:text-xl font-medium md:ml-3'}>Storage Device</h1>
                    <Link href={'/categories/Storage Device'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                {
                    storage.productName ? (<div className="w-full flex items-center justify-between">
                        <div className={'flex justify-center items-center'}>
                            <Image className={'hidden md:block'} src={storage.image} alt={storage.productName} width={100} height={100}/>
                            <h1 className={'md:text-xl font-medium ml-3'}>{storage.productName}</h1>
                        </div>
                        <h1 className={'text-xl font-medium'}>{storage.price}</h1>
                    </div>) : null
                }
            </div>
            <div className={'bg-base-100 shadow-md w-3/4 h-full p-5 mt-10 rounded'}>
                <div className="w-full flex items-center justify-between mb-5">
                    <h1 className={'md:text-xl font-medium md:ml-3'}>Monitor</h1>
                    <Link href={'/categories/Monitor'}>
                        <button className={'btn'}>Choose</button>
                    </Link>
                </div>
                {
                    monitor.productName ? (<div className="w-full flex items-center justify-between">
                        <div className={'flex justify-center items-center'}>
                            <Image className={'hidden md:block'} src={monitor.image} alt={monitor.productName} width={100} height={100}/>
                            <h1 className={'md:text-xl font-medium md:ml-3'}>{monitor.productName}</h1>
                        </div>
                        <h1 className={'text-xl font-medium'}>{monitor.price}</h1>
                    </div>) : null
                }
            </div>
            {
                (cpu.productName && monitor.productName && motherboard.productName && ram.productName && powerSupply.productName && storage.productName) ?
                    <button className={'btn btn-primary w-56 mt-12 disabled'} onClick={notify}>Complete Build</button> : null
            }
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page: ReactElement) {
    return (<RootLayout>{page}</RootLayout>)
}
