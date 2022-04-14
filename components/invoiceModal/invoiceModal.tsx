import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import GoBack from "../header/components/GoBack";
import InvoiceBtns from "../header/components/InvoiceBtns";
import Edit from "./Edit";
import style from "./InvoiceModal.module.scss";

export default function InvoiceModal({ functions, state }) {
    const router = useRouter();
    const { id } = router.query;
    const doc = state.data.find((el) => el.id === id);
    const [invoice, setInvoice] = useState();
    useEffect(() => {
        setInvoice(doc);
    }, [doc]);
    const handleToggle = () => {
        /*animate out */
        modal.current.removeAttribute("open");

        setTimeout(() => {
            if (state.editing) {
                functions.toggleEditMode();
            } else {
                console.log("hi for new");
                functions.toggleNewMode();
            }
        }, 500);
    };

    const modal = useRef();

    useEffect(() => {
        if (state.editing || state.new) {
            modal.current.setAttribute("open", "true");
        }
    }, [state]);

    functions.handleSubmit = (e) => {
        e.preventDefault();

        const newObj = {
            ...doc,
            createdAt: e.target.invoice_date.value,
            description: e.target.project_description.value,
            paymentTerms: e.target.payment_terms.value,
            status: "pending",
            clientAddress: {
                street: e.target.street_from.value,
                city: e.target.city_from.value,
                postCode: e.target.postCode_from.value,
                country: e.target.country_from.value,
            },
            senderAddress: {
                street: e.target.street_to.value,
                city: e.target.city_to.value,
                postCode: e.target.postCode_to.value,
                country: e.target.country_to.value,
            },
            items: [],
            total: 0,
        };

        if (e.target.item_name) {
            const itemsInfo = e.target.item_name.length
                ? {
                      name: Array.from(e.target.item_name),
                      quantity: Array.from(e.target.quantity),
                      price: Array.from(e.target.price),
                  }
                : {
                      name: e.target.item_name.value,
                      quantity: e.target.quantity.value,
                      price: e.target.price.value,
                      total: +e.target.quantity.value + +e.target.price.value,
                  };

            if (e.target.item_name.length) {
                const items = [];

                itemsInfo.name.forEach((name, i) => {
                    const quantity = +itemsInfo.quantity[i].value;
                    const price = +itemsInfo.price[i].value;
                    const total = +quantity * +price;
                    items.push({
                        name: name.value,
                        quantity,
                        price,
                        total,
                    });
                    newObj.total += total;
                });
                newObj.items = items;

                console.log(newObj, itemsInfo, e.target.item_name.value);
            } else {
                newObj.items = [itemsInfo];
                newObj.total = itemsInfo.total;
            }
        }

        if (!doc) {
            newObj.id = "123";
            newObj.createdAt = new Date().toISOString().split("T")[0];
            const now = new Date();
            let due = now.setDate(now.getDate() + 3);
            newObj.paymentDue = new Date(due).toISOString().split("T")[0];
        }

        console.log(newObj);

        functions.applyEditsOrCreate(newObj);
    };

    return (
        <>
            <div className='backdrop' onClick={handleToggle}></div>
            <div className={style.invoiceModal + " invoiceModal"} ref={modal}>
                <form autoComplete='off' onSubmit={functions.handleSubmit}>
                    <div className={style.container}>
                        <span onClick={handleToggle}>
                            <GoBack />
                        </span>
                        <Edit state={state} functions={functions} />
                    </div>
                    <div
                        className={style.row + " invoiceFooter " + style.footer}
                    >
                        {state.editing && (
                            <InvoiceBtns functions={functions} group='edit' />
                        )}
                        {state.new && (
                            <InvoiceBtns functions={functions} group='new' />
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}
