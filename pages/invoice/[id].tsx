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
                        <div className={style.list}>
                            <span>#{invoice.id}</span>
                            <span>{invoice.description}</span>
                        </div>
                        <div className={style.list}>
                            <span>{invoice.senderAddress.street}</span>
                            <span>{invoice.senderAddress.city}</span>
                            <span>{invoice.senderAddress.postCode}</span>
                            <span>{invoice.senderAddress.country}</span>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.list + " dates"}>
                            <span className='createdAt'>
                                <span>Invoice Date</span>
                                <span>{invoice.createdAt}</span>
                            </span>
                            <span className={style.list + " due"}>
                                <span>Payment Due</span>
                                <span>{invoice.paymentDue}</span>
                            </span>
                        </div>
                        <div className={style.list + " billTo"}>
                            <span className='client'>{invoice.clientName}</span>
                            <span className={style.list + " address"}>
                                <span>{invoice.clientAddress.street}</span>
                                <span>{invoice.clientAddress.city}</span>
                                <span>{invoice.clientAddress.postCode}</span>
                                <span>{invoice.clientAddress.country}</span>
                            </span>
                        </div>
                        <div className={style.list + " sentTo"}>
                            <span>Sent to</span>
                            <span>{invoice.clientEmail}</span>
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
                            <span>Amount Due</span>
                            <span>£ {invoice.total}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}
