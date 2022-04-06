import React, { useEffect, useRef, useState } from "react";
import style from "./InvoiceModal.module.scss";
import trash from "./assets/icon-delete.svg";
import { useRouter } from "next/router";

export default function Edit({ state }) {
    const router = useRouter();
    const { id } = router.query;
    const doc = state.data.find((el) => el.id === id);
    const [invoice, setInvoice] = useState(null);
    const [items, setItems] = useState([]);
    useEffect(() => {
        if (doc) {
            setInvoice(doc);
        }
    }, [doc]);

    useEffect(() => {
        if (invoice) {
            // console.log("hi", document.forms);
            const street_from = document.forms[0].street_from;
            const city_from = document.forms[0].city_from;
            const postCode_from = document.forms[0].postCode_from;
            const country_from = document.forms[0].country_from;
            const street_to = document.forms[0].street_to;
            const city_to = document.forms[0].city_to;
            const postCode_to = document.forms[0].postCode_to;
            const country_to = document.forms[0].country_to;
            const invoice_date = document.forms[0].invoice_date;
            const payment_terms = document.forms[0].payment_terms;
            const project_description = document.forms[0].project_description;
            const item_name = document.forms[0].item_name;
            const quantity = document.forms[0].quantity;
            const price = document.forms[0].price;

            console.log(invoice, street_from);

            street_from.value = invoice.clientAddress.street;
            city_from.value = invoice.clientAddress.city;
            postCode_from.value = invoice.clientAddress.postCode;
            country_from.value = invoice.clientAddress.country;
            street_to.value = invoice.senderAddress.street;
            city_to.value = invoice.senderAddress.city;
            postCode_to.value = invoice.senderAddress.postCode;
            country_to.value = invoice.senderAddress.country;
            invoice_date.value = invoice.createdAt;
            payment_terms.value = invoice.paymentTerms;
            project_description.value = invoice.description;

            if (invoice.items) {
                console.log(invoice.items);
                const temp = [];
                invoice.items.forEach((item) => {
                    temp.push(<ListItem item={item} />);
                });
                setItems(temp);
            }
        }
    }, [invoice]);
    return (
        <div className={style.form + " form"} autoComplete='off'>
            {state.editing && <h2>Edit #{id}</h2>}
            {state.new && <h2>New Invoice</h2>}
            <section>
                <p>Bill From</p>
                <div className={style.field + " field"}>
                    <label htmlFor='street_from'>Street Address</label>
                    <input type='text' name='street_from' id='street_from' />
                </div>
                <div className={style.row}>
                    <div className={style.field + " field"}>
                        <label htmlFor='city_from'>City</label>
                        <input type='text' name='city_from' id='city_from' />
                    </div>
                    <div className={style.field + " field"}>
                        <label htmlFor='postCode_from'>Post Code</label>
                        <input
                            type='text'
                            name='postCode_from'
                            id='postCode_from'
                        />
                    </div>
                </div>
                <div className={style.field + " field"}>
                    <label htmlFor='country_from'>Country</label>
                    <input type='text' name='country_from' id='country_from' />
                </div>
            </section>
            <section>
                <p>Bill To</p>
                <div className={style.field + " field"}>
                    <label htmlFor='street_to'>Street Address</label>
                    <input type='text' name='street_to' id='street_to' />
                </div>
                <div className={style.row}>
                    <div className={style.field + " field"}>
                        <label htmlFor='city_to'>City</label>
                        <input type='text' name='city_to' id='city_to' />
                    </div>
                    <div className={style.field + " field"}>
                        <label htmlFor='postCode_to'>Post Code</label>
                        <input
                            type='text'
                            name='postCode_to'
                            id='postCode_to'
                        />
                    </div>
                </div>
                <div className={style.field + " field"}>
                    <label htmlFor='country_to'>Country</label>
                    <input type='text' name='country_to' id='country_to' />
                </div>
            </section>
            <section>
                <div className={style.field + " field"}>
                    <label htmlFor='invoice_date'>Invoice Date</label>
                    <input type='text' name='invoice_date' id='invoice_date' />
                </div>
                <div className={style.field + " field"}>
                    <label htmlFor='payment_terms'>Payment Terms</label>
                    <input
                        type='text'
                        name='payment_terms'
                        id='payment_terms'
                    />
                </div>
                <div className={style.field + " field"}>
                    <label htmlFor='project_description'>
                        Project Description
                    </label>
                    <input
                        type='text'
                        name='project_description'
                        id='project_description'
                    />
                </div>
            </section>
            <h3>Item List</h3>
            {items}
            <div className={style.btn + " addNew " + style.addNew}>
                + Add New Item
            </div>
        </div>
    );
}

function ListItem({ item }) {
    const [state, setState] = useState();
    const name = useRef();
    const quantity = useRef();
    const price = useRef();
    const total = useRef();
    useEffect(() => {
        if (item) {
            // console.log(name.current);

            name.current.value = item.name;
            quantity.current.value = item.quantity;
            price.current.value = item.price;
        }
    }, [item]);
    return (
        <section className={style.listItem}>
            <div className={style.field + " field " + style.itemName}>
                <label htmlFor='item_name'>Item Name</label>
                <input type='text' name='item_name' id='item_name' ref={name} />
            </div>
            <div className={style.row}>
                <div className={style.innerRow + " " + style.qtyPriceTotal}>
                    <div className={style.field + " field " + style.qty}>
                        <label htmlFor='quantity'>Qty.</label>
                        <input
                            type='number'
                            name='quantity'
                            id='quantity'
                            ref={quantity}
                        />
                    </div>
                    <div className={style.field + " field " + style.price}>
                        <label htmlFor='price'>Price</label>
                        <input
                            type='number'
                            name='price'
                            id='price'
                            step='0.01'
                            ref={price}
                        />
                    </div>
                    <div className={style.field + " field"}>
                        <label htmlFor='total'>Total</label>
                        <div className={style.total}>£ {item.total}</div>
                    </div>
                </div>
                <div className={style.delete}>{trash()}</div>
            </div>
        </section>
    );
}
