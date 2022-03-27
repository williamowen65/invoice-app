import React, { useEffect, useRef } from "react";
import style from "./Header.module.scss";
import arrow from "./assets/icon-arrow-down.svg";
import check from "./assets/icon-check.svg";

export default function Header(props) {
    const toggle = useRef(null);

    const handleToggle = () => {
        let go = true;
        let dialogPos;
        console.log("hi");
        const el = toggle.current;

        if (el.hasAttribute("open")) {
            el.removeAttribute("open");
        } else {
            el.setAttribute("open", "");
        }
    };

    return (
        <header className={style.header}>
            <div className={style.pageinfo}>
                <h1>Invoices</h1>
                <span className='sec-color'>
                    <span className='hideOnMobile'>There are </span>
                    {0} total
                    <span className='hideOnMobile'> invoices</span>
                </span>
            </div>
            <div className={style.right}>
                <div className={style.filter} ref={toggle}>
                    <label className={style.filterText} onClick={handleToggle}>
                        <span>
                            Filter
                            <span className='hideOnMobile'> by status</span>
                        </span>
                        <span className={style.arrow}>{arrow()}</span>
                    </label>
                    <div className={style.dialog + " dialog"}>
                        <div className={style.field}>
                            <input type='radio' id='draft' name='status' />
                            <label htmlFor='draft'>
                                <div className={style.checkbox + " checkbox"}>
                                    <span>{check()}</span>
                                </div>
                                Draft
                            </label>
                        </div>
                        <div className={style.field}>
                            <input type='radio' id='pending' name='status' />
                            <label htmlFor='pending'>
                                <div className={style.checkbox + " checkbox"}>
                                    <span>{check()}</span>
                                </div>
                                Pending
                            </label>
                        </div>
                        <div className={style.field}>
                            <input type='radio' id='paid' name='status' />
                            <label htmlFor='paid'>
                                <div className={style.checkbox + " checkbox"}>
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
                    <div className={style.text}>
                        New
                        <span className='hideOnMobile'>Invoice</span>
                    </div>
                </button>
            </div>
        </header>
    );
}
