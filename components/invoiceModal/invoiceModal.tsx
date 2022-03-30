import React from "react";
import GoBack from "../header/components/GoBack";
import Edit from "./Edit";
import style from "./InvoiceModal.module.scss";

export default function InvoiceModal({ functions, state }) {
    const handleToggle = () => {
        if (state.editing) {
            functions.toggleEditMode();
        } else {
            functions.toggleNewMode();
        }
    };

    return (
        <>
            <div className='backdrop' onClick={handleToggle}></div>
            <div className={style.invoiceModal + " invoiceModal"}>
                <div className={style.container}>
                    <span onClick={functions.toggleEditMode}>
                        <GoBack />
                    </span>
                    <Edit />
                </div>
            </div>
        </>
    );
}
