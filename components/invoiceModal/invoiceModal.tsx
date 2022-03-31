import { useRouter } from "next/router";
import React from "react";
import GoBack from "../header/components/GoBack";
import InvoiceBtns from "../header/components/InvoiceBtns";
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
                <form>
                    <div className={style.container}>
                        <span onClick={functions.toggleEditMode}>
                            <GoBack />
                        </span>
                        <Edit state={state} />
                    </div>
                    {state.editing && (
                        <div className={style.row + " " + style.footer}>
                            <InvoiceBtns functions={functions} group='edit' />
                        </div>
                    )}
                    {state.new && (
                        <div className={style.row + " " + style.footer}>
                            <InvoiceBtns functions={functions} group='new' />
                        </div>
                    )}
                </form>
            </div>
        </>
    );
}
