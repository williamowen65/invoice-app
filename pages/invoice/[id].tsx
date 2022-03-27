import React from "react";
import InvoiceHeader from "../../components/header/InvoiceHeader";

export default function Invoice({ data }) {
    console.log(data);

    return (
        <>
            <InvoiceHeader data={data} />
            Invoice
        </>
    );
}
