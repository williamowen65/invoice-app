import React from "react";
import style from "../InvoiceHeader.module.scss";

export default function InvoiceBtns(props) {
    return (
        <span className={style.btns}>
            <button className={style.edit + " edit"}>
                <div className={style.text}>Edit</div>
            </button>
            <button className={style.delete}>
                <div className={style.text}>Delete</div>
            </button>
            <button className={style.markPaid}>
                <div className={style.text}>Mark as Paid</div>
            </button>
        </span>
    );
}
