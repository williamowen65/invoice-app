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
        filteredData: [],
        editing: false,
        new: false,
        filter: "",
    });
    useEffect(() => {
        if (router.pathname === "/") {
            setState({
                ...state,
                editing: false,
                new: false,
            });
        }
    }, [router.pathname]);

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
                filteredData: res,
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

    functions.toggleNewMode = () => {
        setState({
            ...state,
            new: !state.new,
        });
    };

    functions.delete = (id) => {
        console.log("delete att", id);

        setState({
            ...state,
            filteredData: state.filteredData.filter((el) => el.id != id),
            data: state.data.filter((el) => el.id != id),
        });
        router.push("/");
    };

    // functions.deleteItem = (id, itemName) => {
    //     setState({
    //         ...state,
    //         data: state.data.map((el) => {
    //             if (el.id == id) {
    //                 el.items = el.items.filter((item) => item.name != itemName);
    //             }
    //             return el;
    //         }),
    //     });
    // };

    functions.applyEditsOrCreate = (obj) => {
        console.log(obj);

        if (state.data.find((el) => el.id == obj.id)) {
            setState({
                ...state,
                data: state.data.map((el) => {
                    if (el.id == obj.id) {
                        return obj;
                    }
                    return el;
                }),
                filteredData: state.filteredData.map((el) => {
                    if (el.id == obj.id) {
                        return obj;
                    }
                    return el;
                }),
            });
        } else {
            setState({
                ...state,
                data: state.data.concat(obj),
            });
            if (state.filter == obj.status || state.filter == "") {
                setState({
                    ...state,
                    filteredData: state.filteredData.concat(obj),
                });
            }
            //create new
        }
    };

    functions.markPaid = (id) => {
        setState({
            ...state,
            data: state.data.map((el) => {
                if (el.id == id) {
                    el.status = "paid";
                }
                return el;
            }),
            filteredData: state.filteredData.map((el) => {
                if (el.id == id) {
                    el.status = "paid";
                }
                return el;
            }),
        });
    };

    functions.filterBy = (status) => {
        status
            ? setState({
                  ...state,
                  filter: status,
                  filteredData: state.data.filter((el) => el.status == status),
              })
            : setState({
                  ...state,
                  filter: "",
                  filteredData: state.data,
              });
    };

    return (
        <div className='layout'>
            <Sidebar />
            {(state.editing || state.new) && (
                <InvoiceModal functions={functions} state={state} />
            )}
            <main>
                <Component {...pageProps} state={state} functions={functions} />
            </main>
            {router.pathname == "/invoice/[id]" && (
                <div className='onlyOnMobile mobileFooter'>
                    <InvoiceBtns functions={functions} group='normal' />
                </div>
            )}
        </div>
    );
}

export default MyApp;
