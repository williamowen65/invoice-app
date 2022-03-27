import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar/Sidebar";
// import Header from "../componentsHomeHeaderHeader";
import { useEffect, useState } from "react";

String.prototype.capitialize = function () {
    const first = this[0].toUpperCase();
    const string = first + this.slice(1);
    return string;
};

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
                {/* <Header data={data} /> */}
                <Component {...pageProps} data={data} />
            </main>
        </div>
    );
}

export default MyApp;
