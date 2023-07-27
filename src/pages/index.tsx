import {ReactElement} from "react";
import RootLayout from "@/components/layouts/RootLayout";

export default function Home() {
    return (<div>
        <h1>This is home</h1>
    </div>)
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (<RootLayout>{page}</RootLayout>)
}
