import Link from "next/link";
import React from "react";
import style from "../InvoiceHeader.module.scss";
import arrow from "../assets/icon-arrow-left.svg";

export default function GoBack(props) {
    return (
        <Link href='/'>
            <span className={style.goBack}>
                {arrow()}
                <span>Go Back</span>
            </span>
        </Link>
    );
}
