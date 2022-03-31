import React, { useEffect, useRef } from "react";
import style from "./HomeHeader.module.scss";
import arrow from "./assets/icon-arrow-down.svg";
import check from "./assets/icon-check.svg";
import Link from "next/link";

export default function Header({ data, functions }) {
    const toggle = useRef(null);

    const handleToggle = () => {
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
                    {data.length ? (
                        <>
                            <span className='hideOnMobile'>There are </span>
                            {data.length} total
                            <span className='hideOnMobile'> invoices</span>
                        </>
                    ) : (
                        <span>No invoices</span>
                    )}
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
                        <div
                            className='backdrop transparent'
                            onClick={handleToggle}
                        ></div>
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
                <button onClick={functions?.toggleNewMode}>
                    <div className={style.add}>
                        <span>+</span>
                    </div>
                    <div className={style.text}>
                        New
                        <span className='hideOnMobile'> Invoice</span>
                    </div>
                </button>
            </div>
        </header>
    );
}
