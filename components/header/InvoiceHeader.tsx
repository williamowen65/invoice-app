import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./InvoiceHeader.module.scss";

export default function InvoiceHeader({ data }) {
    const router = useRouter();
    const { id } = router.query;
    const doc = data.find((el) => (el.id = id));
    const [status, setStatus] = useState(null);
    useEffect(() => {
        if (doc) {
            setStatus(doc.status);
        }
    }, [doc]);

    // console.log(status, data);

    return (
        <header className={style.header + " invoiceHeader"}>
            <div className={style.status}>
                <span>Status</span>
                {status && (
                    <span
                        className={
                            style.status + " " + style[status] + " " + status
                        }
                    >
                        {status.capitialize()}
                    </span>
                )}
            </div>
            <div className={style.right}>
                <button className={style.edit + " edit"}>
                    <div className={style.text}>Edit</div>
                </button>
                <button className={style.delete}>
                    <div className={style.text}>Delete</div>
                </button>
                <button className={style.markPaid}>
                    <div className={style.text}>Mark as Paid</div>
                </button>
            </div>
        </header>
    );
}
