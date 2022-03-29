import React from "react";
import GoBack from "../header/components/GoBack";
import style from "./InvoiceModal.module.scss";

export default function InvoiceModal({ functions }) {
    return (
        <>
            <div className='backdrop'></div>
            <div className={style.invoiceModal}>
                <span onClick={functions.toggleEditMode}>
                    <GoBack />
                </span>
                <div>New Invoice</div>
            </div>
        </>
    );
}
