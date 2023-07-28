import {ReactNode} from "react";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import {Provider} from "react-redux";
import {store} from "@/redux/store";

type IProps = {
    children: ReactNode
}
const RootLayout = ({children}: IProps) => {
    return (
        <Provider store={store}>
            <Navbar/>
            <div className={'h-full'}>{children}</div>
            <Footer/>
        </Provider>
    );
};

export default RootLayout;
