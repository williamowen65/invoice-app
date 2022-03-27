import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./InvoiceHeader.module.scss";
import InvoiceBtns from "./components/InvoiceBtns";
import arrow from "./assets/icon-arrow-left.svg";
import Link from "next/link";

export default function InvoiceHeader({ data }) {
    const [status, setStatus] = useState(data.status);

    return (
        <>
            <Link href='/'>
                <span className={style.goBack}>
                    {arrow()}
                    <span>Go Back</span>
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
                    <InvoiceBtns />
                </div>
            </header>
        </>
    );
}
