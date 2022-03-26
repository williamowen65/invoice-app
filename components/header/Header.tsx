import React, { useEffect, useRef } from "react";
import style from "./Header.module.scss";
import arrow from "./assets/icon-arrow-down.svg";
import check from "./assets/icon-check.svg";

export default function Header(props) {
    const dialog = useRef(null);

    const handleToggle = () => {
        let go = true;
        let dialogPos;

        return function (e) {
            // const el = dialog.current;
            // if (go && el.hasAttribute("show")) {
            //     if (
            //         e.clientX < dialogPos.x &&
            //         e.clientX > dialogPos.x + dialogPos.width &&
            //         e.clientY < dialogPos.y &&
            //         e.clientY > dialogPos.y + dialogPos.height
            //     ) {
            //         el.removeAttribute("show");
            //     }
            // } else if (go) {
            // el.setAttribute("show", "");
            // }
            // go = false;
            // setTimeout(() => {
            //     go = true;
            // });
            // if (!dialogPos) {
            //     dialogPos = el.getBoundingClientRect();
            // }
            // console.log(e.clientX, e.clientY);
            // console.log(dialogPos);
            // console.log(
            //     e.clientX > dialogPos.x,
            //     e.clientX < dialogPos.x + dialogPos.width,
            //     e.clientY < dialogPos.y + dialogPos.height,
            //     e.clientY < dialogPos.y + dialogPos.height
            // );
        };
    };

    return (
        <header className={style.header}>
            <div className={style.pageinfo}>
                <h1>Invoices</h1>
                <span>There are {0} total invoices</span>
            </div>
            <div className={style.right} onClick={handleToggle()}>
                <div className={style.filter}>
                    <label className={style.filterText}>
                        Filter by status
                        {arrow()}
                    </label>
                    <div
                        className={style.dialog + " dialog"}
                        ref={dialog}
                        show='true'
                        // onClick={(e) => e.preventDefault()}
                    >
                        <div className={style.field}>
                            <input type='radio' id='draft' name='status' />
                            <label htmlFor='draft'>
                                <div className={style.checkbox}>
                                    <span>{check()}</span>
                                </div>
                                Draft
                            </label>
                        </div>
                        <div className={style.field}>
                            <input type='radio' id='pending' name='status' />
                            <label htmlFor='pending'>
                                <div className={style.checkbox}>
                                    <span>{check()}</span>
                                </div>
                                Pending
                            </label>
                        </div>
                        <div className={style.field}>
                            <input type='radio' id='paid' name='status' />
                            <label htmlFor='paid'>
                                <div className={style.checkbox}>
                                    <span>{check()}</span>
                                </div>
                                Paid
                            </label>
                        </div>
                    </div>
                </div>
                <button>
                    <div className={style.add}>
                        <span>+</span>
                    </div>
                    <div className={style.text}>New Invoice</div>
                </button>
            </div>
        </header>
    );
}
