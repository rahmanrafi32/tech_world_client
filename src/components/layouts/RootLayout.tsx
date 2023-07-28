import {ReactNode, useEffect} from "react";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {SessionProvider} from "next-auth/react";

type IProps = {
    children: ReactNode
}
const RootLayout = ({children}: IProps) => {
    return (
        <SessionProvider>
            <Provider store={store}>
                <Navbar/>
                <div className={'h-full'}>{children}</div>
                <Footer/>
            </Provider>
        </SessionProvider>
    );
};

export default RootLayout;
