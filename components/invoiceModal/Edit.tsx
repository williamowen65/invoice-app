import React from "react";
import style from "./InvoiceModal.module.scss";
import trash from "./assets/icon-delete.svg";

export default function Edit(props) {
    return (
        <form className={style.form + " form"} autoComplete='off'>
            <h2>Edit #{"edit id"}</h2>
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
            <section>
                <div className={style.field + " field"}>
                    <label htmlFor='item_name'>Item Name</label>
                    <input type='text' name='item_name' id='item_name' />
                </div>
                <div className={style.row}>
                    <div className={style.innerRow}>
                        <div className={style.field + " field " + style.qty}>
                            <label htmlFor='quantity'>Qty.</label>
                            <input type='text' name='quantity' id='quantity' />
                        </div>
                        <div className={style.field + " field " + style.price}>
                            <label htmlFor='price'>Price</label>
                            <input type='text' name='price' id='price' />
                        </div>
                        <div className={style.field + " field"}>
                            <label htmlFor='total'>Total</label>
                            <div className={style.total}>{"total"}</div>
                        </div>
                    </div>
                    <div className={style.delete}>{trash()}</div>
                </div>
            </section>
            <div className={style.btn + " " + style.addNew}>+ Add New Item</div>
            <div className={style.row}>
                <div className='btn'>Cancel</div>
                <button>Save Changes</button>
            </div>
        </form>
    );
}
