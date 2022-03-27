import React from "react";
import style from "./Ticket.module.scss";
import arrow from "./assets/icon-arrow-right.svg";
import { stringify } from "querystring";

export default function Ticket({ data }) {
    const { id, paymentDue, clientName, total, status } = data;

    String.prototype.capitialize = function () {
        const first = this[0].toUpperCase();
        const string = first + this.slice(1);
        return string;
    };

    return (
        <div className={style.ticket + " ticket"}>
            <span className={style.id}>
                <span className='ticket-off-1'>#</span>
                {id}
            </span>
            <span className={style.due + " ticket-off-1 due"}>
                Due {paymentDue}
            </span>
            <span className={style.client + " ticket-off-2"}>{clientName}</span>
            <span className={style.total}>£{total}</span>
            <span className={style.status + " " + style[status] + " " + status}>
                {status.capitialize()}
            </span>
            <span className={style.arrow}>{arrow()}</span>
        </div>
    );
}
