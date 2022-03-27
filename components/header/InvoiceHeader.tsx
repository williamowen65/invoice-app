import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./InvoiceHeader.module.scss";
import InvoiceBtns from "./components/InvoiceBtns";

export default function InvoiceHeader({ data }) {
    const router = useRouter();
    const { id } = router.query;
    const doc = data.find((el) => el.id === id);
    const [status, setStatus] = useState(null);
    useEffect(() => {
        if (doc) {
            console.log(doc, id);

            setStatus(doc.status);
        }
    }, [doc]);

    // console.log(status, data);

    return (
        <header className={style.header + " invoiceHeader"}>
            <div>
                <span>Status</span>
                <span className={style.status}>
                    {status && (
                        <span
                            className={
                                style.status +
                                " " +
                                style[status] +
                                " " +
                                status
                            }
                        >
                            {status.capitialize()}
                        </span>
                    )}
                </span>
            </div>
            <div className={style.right}>
                <InvoiceBtns />
            </div>
        </header>
    );
}
