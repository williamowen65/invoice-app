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

    const [itemsTable, setItemsTable] = useState([]);
    const [itemsMobile, setItemsMobile] = useState([]);

    useEffect(() => {
        console.log(invoice);

        const itemsTable = invoice?.items.map((el) => {
            return (
                <tr>
                    <td>{el.name}</td>
                    <td>{el.quantity}</td>
                    <td>£ {el.price}</td>
                    <td>£ {el.total}</td>
                </tr>
            );
        });

        const itemsMobile = invoice?.items.map((el) => {
            return (
                <div className={style.mobileItem}>
                    <div className={style.left}>
                        <span>{el.name}</span>
                        <span className='title'>
                            {el.quantity} x £ {el.price}
                        </span>
                    </div>
                    <div className='right'>£ {el.total}</div>
                </div>
            );
        });

        setItemsTable(itemsTable);
        setItemsMobile(itemsMobile);
    }, [invoice]);

    return (
        invoice && (
            <>
                <InvoiceHeader data={invoice} />
                <div className={style.invoice + " invoice"}>
                    <div className={style.row}>
                        <div className={style.list + " id " + style.id}>
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
                                <span
                                    className={
                                        style.list +
                                        " createdAt " +
                                        style.createdAt
                                    }
                                >
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
                            <div
                                className={
                                    style.list + " billTo " + style.billTo
                                }
                            >
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
                        <div
                            className={
                                style.list + " sentTo" + " " + style.sentTo
                            }
                        >
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
                            <table className='hideOnMobile'>
                                <tr>
                                    <th>Item Name</th>
                                    <th>QTY.</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                                {itemsTable}
                            </table>
                            <div
                                className={style.itemsMobile + " onlyOnMobile"}
                            >
                                {itemsMobile}
                            </div>
                        </div>
                        <div className={style.summary + " summary"}>
                            <span className='hideOnMobile'>Amount Due</span>
                            <span className='onlyOnMobile'>Grand Total</span>
                            <span className={style.total}>
                                £ {invoice.total}
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}
