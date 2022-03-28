import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar/Sidebar";
// import Header from "../componentsHomeHeaderHeader";
import { useEffect, useState } from "react";
import InvoiceBtns from "../components/header/components/InvoiceBtns";
import { useRouter } from "next/router";

String.prototype.capitialize = function () {
    const first = this[0].toUpperCase();
    const string = first + this.slice(1);
    return string;
};

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [data, setData] = useState([]);
    useEffect(() => {
        const data = fetch("/data.json");
        data.then((res) => res.json()).then((res) => {
            res = res.map((el) => {
                const month = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ];
                let date = new Date(Date.parse(el.paymentDue));
                const mo = month[date.getMonth()];
                const day = date.getDay();
                const yr = date.getFullYear();
                // const dayYr = date.slice(4);

                console.log(mo, day, yr);
                el.paymentDue = `${mo} ${day} ${yr}`;
                return el;
            });
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
            {router.pathname == "/invoice/[id]" && (
                <div className='onlyOnMobile mobileFooter'>
                    <InvoiceBtns />
                </div>
            )}
        </div>
    );
}

export default MyApp;
