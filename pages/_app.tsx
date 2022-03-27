import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const data = fetch("/data.json");
        data.then((res) => res.json()).then((res) => {
            setData(res);
        });
    }, []);

    return (
        <div className='layout'>
            <Sidebar />
            <main>
                <Header data={data} />
                <Component {...pageProps} data={data} />
            </main>
        </div>
    );
}

export default MyApp;
