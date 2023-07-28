import {ReactNode} from "react";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";

type IProps = {
    children: ReactNode
}
const RootLayout = ({children}: IProps) => {
    return (
        <>
            <Navbar/>
            <div className={'h-full'}>{children}</div>
            <Footer/>
        </>
    );
};

export default RootLayout;
