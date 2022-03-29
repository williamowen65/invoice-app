import React from "react";
import GoBack from "../header/components/GoBack";
import style from "./InvoiceModal.module.scss";

export default function InvoiceModal({ functions }) {
    return (
        <>
            <div className='backdrop' onClick={functions.toggleEditMode}></div>
            <div className={style.invoiceModal}>
                <form className={style.container}>
                    <span onClick={functions.toggleEditMode}>
                        <GoBack />
                    </span>
                    <div>New Invoice</div>
                </form>
            </div>
        </>
    );
}
