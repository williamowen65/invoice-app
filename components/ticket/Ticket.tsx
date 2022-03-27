import React from "react";
import style from "./Ticket.module.scss";

export default function Ticket({ data }) {
    const { id, paymentDue, clientName, total, status } = data;
    return (
        <div className={style.ticket}>
            <span>
                <span className='ticket-off-1'>#</span>
                {id}
            </span>
            <span className='ticket-off-1'>Due {paymentDue}</span>
            <span className='ticket-off-2'>{clientName}</span>
            <span>£{total}</span>
            <span>{status}</span>
        </div>
    );
}
