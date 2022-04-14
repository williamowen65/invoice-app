import { useRouter } from "next/router";
import React from "react";
import style from "../InvoiceHeader.module.scss";

export default function InvoiceBtns({ functions, group }) {
    const router = useRouter();
    const { id } = router.query;

    if (group == "normal") {
        return (
            <span className={style.btns}>
                <button
                    className={style.edit + " edit"}
                    onClick={functions?.toggleEditMode}
                >
                    <div className={style.text}>Edit</div>
                </button>
                <button
                    className={style.delete}
                    onClick={() => functions.delete(id)}
                >
                    <div className={style.text}>Delete</div>
                </button>
                <button
                    className={style.markPaid}
                    onClick={() => functions.markPaid(id)}
                >
                    <div className={style.text}>Mark as Paid</div>
                </button>
            </span>
        );
    } else if (group === "edit") {
        return (
            <span className={style.btns}>
                <span className={style.edit + " edit discard"}>
                    <div
                        className={style.text}
                        onClick={() => functions.toggleEditMode()}
                    >
                        Discard Changes
                    </div>
                </span>
                <button className={style.markPaid} type='submit'>
                    <div className={style.text}>Send & Save</div>
                </button>
            </span>
        );
    } else if (group === "new") {
        return (
            <span className={style.btns}>
                <span className={style.edit + " edit"}>
                    <div className={style.text}>Discard</div>
                </span>
                <span className={style.delete + " " + style.draft}>
                    <div className={style.text}>Save as Draft</div>
                </span>
                <button className={style.markPaid} type='submit'>
                    <div className={style.text}>Send & Save</div>
                </button>
            </span>
        );
    } else {
        return null;
    }
}
