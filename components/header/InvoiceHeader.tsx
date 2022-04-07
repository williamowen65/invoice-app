import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./InvoiceHeader.module.scss";
import InvoiceBtns from "./components/InvoiceBtns";
import Link from "next/link";
import GoBack from "./components/GoBack";

export default function InvoiceHeader({ data, functions }) {
    const [status, setStatus] = useState(data.status);

    useEffect(() => {
        console.log("change of status");

        setStatus(data.status);
    }, [data.status]);

    return (
        <>
            <Link href='/'>
                <span>
                    <GoBack />
                </span>
            </Link>
            <header className={style.header + " invoice"}>
                <span className={style.statusText}>Status </span>
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
                <div className={style.right}>
                    <InvoiceBtns functions={functions} group='normal' />
                </div>
            </header>
        </>
    );
}
