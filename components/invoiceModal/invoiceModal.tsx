import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import GoBack from "../header/components/GoBack";
import InvoiceBtns from "../header/components/InvoiceBtns";
import Edit from "./Edit";
import style from "./InvoiceModal.module.scss";

export default function InvoiceModal({ functions, state }) {
    const handleToggle = () => {
        /*animate out */
        modal.current.removeAttribute("open");

        setTimeout(() => {
            if (state.editing) {
                functions.toggleEditMode();
            } else {
                console.log("hi for new");
                functions.toggleNewMode();
            }
        }, 500);
    };

    const modal = useRef();

    useEffect(() => {
        if (state.editing || state.new) {
            modal.current.setAttribute("open", "true");
        }
    }, [state]);

    return (
        <>
            <div className='backdrop' onClick={handleToggle}></div>
            <div className={style.invoiceModal + " invoiceModal"} ref={modal}>
                <form>
                    <div className={style.container}>
                        <span onClick={handleToggle}>
                            <GoBack />
                        </span>
                        <Edit state={state} functions={functions} />
                    </div>
                    <div
                        className={style.row + " invoiceFooter " + style.footer}
                    >
                        {state.editing && (
                            <InvoiceBtns functions={functions} group='edit' />
                        )}
                        {state.new && (
                            <InvoiceBtns functions={functions} group='new' />
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}
