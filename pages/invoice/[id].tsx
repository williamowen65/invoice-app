import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import InvoiceHeader from "../../components/header/InvoiceHeader";
import style from "../../styles/Invoice.module.scss";

export default function Invoice({ data }) {
    const router = useRouter();
    const { id } = router.query;
    const doc = data.find((el) => el.id === id);
    const [invoice, setInvoice] = useState(null);
    useEffect(() => {
        if (doc) {
            setInvoice(doc);
        }
    }, [doc]);

    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log(invoice);

        const items = invoice?.items.map((el) => {
            return (
                <tr>
                    <td>{el.name}</td>
                    <td>{el.quantity}</td>
                    <td>£ {el.price}</td>
                    <td>£ {el.total}</td>
                </tr>
            );
        });
        setItems(items);
    }, [invoice]);

    return (
        invoice && (
            <>
                <InvoiceHeader data={invoice} />
                <div className={style.invoice + " invoice"}>
                    <div className={style.row}>
                        <div className={style.list + " id"}>
                            <span className={style.id}>
                                <span className='title'># </span>
                                {invoice.id}
                            </span>
                            <span
                                className={style.description + " description"}
                            >
                                {invoice.description}
                            </span>
                        </div>
                        <div
                            className={
                                style.list + " " + style.address + " address"
                            }
                        >
                            <span>{invoice.senderAddress.street}</span>
                            <span>{invoice.senderAddress.city}</span>
                            <span>{invoice.senderAddress.postCode}</span>
                            <span>{invoice.senderAddress.country}</span>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.innerRow}>
                            <div className={style.list + " dates"}>
                                <span className={style.list + " createdAt"}>
                                    <span className={style.title + " title"}>
                                        Invoice Date
                                    </span>
                                    <span>{invoice.createdAt}</span>
                                </span>
                                <span className={style.list + " due"}>
                                    <span className={style.title + " title"}>
                                        Payment Due
                                    </span>
                                    <span>{invoice.paymentDue}</span>
                                </span>
                            </div>
                            <div className={style.list + " billTo"}>
                                <span className={style.title + " title"}>
                                    Bill To
                                </span>
                                <span className={style.clientName + " client"}>
                                    {invoice.clientName}
                                </span>
                                <span
                                    className={
                                        style.list +
                                        " " +
                                        style.address +
                                        " address"
                                    }
                                >
                                    {invoice.clientAddress.street ? (
                                        <>
                                            <span>
                                                {invoice.clientAddress.street}
                                            </span>
                                            <span>
                                                {invoice.clientAddress.city}
                                            </span>
                                            <span>
                                                {invoice.clientAddress.postCode}
                                            </span>
                                            <span>
                                                {invoice.clientAddress.country}
                                            </span>
                                        </>
                                    ) : (
                                        <span>[missing address data]</span>
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className={style.list + " sentTo"}>
                            <span className={style.title + " title"}>
                                Sent to
                            </span>
                            {invoice.clientEmail ? (
                                <span>{invoice.clientEmail}</span>
                            ) : (
                                <span>[missing customer email]</span>
                            )}
                        </div>
                    </div>
                    <div className={style.invoiceSummary + " invoiceSummary"}>
                        <div className={style.items + " items"}>
                            <table>
                                <tr>
                                    <th>Item Name</th>
                                    <th>QTY.</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                                {items}
                            </table>
                        </div>
                        <div className={style.summary + " summary"}>
                            <span className='hideOnMobile'>Amount Due</span>
                            <span className='onlyOnMobile'>Grand Total</span>
                            <span>£ {invoice.total}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}
