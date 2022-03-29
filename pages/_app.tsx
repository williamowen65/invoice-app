import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar/Sidebar";
// import Header from "../componentsHomeHeaderHeader";
import { useEffect, useState } from "react";
import InvoiceBtns from "../components/header/components/InvoiceBtns";
import { useRouter } from "next/router";
import InvoiceModal from "../components/invoiceModal/invoiceModal";
import { modifyDate } from "../utils/helpers";
import "../utils/proto";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    // const [data, setData] = useState([]);
    // const [editing, setEditing] = useState(false);

    const [state, setState] = useState({
        data: [],
        editing: false,
    });

    useEffect(() => {
        const data = fetch("/data.json");
        data.then((res) => res.json()).then((res) => {
            res = res.map((el) => {
                el.paymentDue = modifyDate(el.paymentDue);
                el.createdAt = modifyDate(el.createdAt);
                return el;
            });
            setState({
                ...state,
                data: res,
            });
        });
    }, []);

    const functions = {};

    functions.toggleEditMode = () => {
        setState({
            ...state,
            editing: !state.editing,
        });
    };

    return (
        <div className='layout'>
            <Sidebar />
            {state.editing && <InvoiceModal functions={functions} />}
            <main>
                {/* <Header data={data} /> */}
                <Component {...pageProps} state={state} functions={functions} />
            </main>
            {router.pathname == "/invoice/[id]" && (
                <div className='onlyOnMobile mobileFooter'>
                    <InvoiceBtns functions={functions} />
                </div>
            )}
        </div>
    );
}

export default MyApp;
