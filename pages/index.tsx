import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Ticket from "../components/ticket/Ticket";
import { useEffect, useState } from "react";
import HomeHeader from "../components/header/HomeHeader";

const Home: NextPage = ({ state, functions }) => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const tickets = state.filteredData?.map((ticket) => {
            return <Ticket data={ticket} key={ticket.id} />;
        });
        setTickets(tickets);
    }, [state]);

    return (
        <>
            <HomeHeader data={state} functions={functions} />
            {state?.filteredData.length ? (
                <div className={styles.container}>{tickets}</div>
            ) : (
                <div className={styles.container + " " + styles.noInvoices}>
                    <img src='/assets/illustration-empty.svg' alt='' />
                    <h2>There is nothing here</h2>
                    <p>
                        Create an invoice by clicking the New Invoice button and
                        get started
                    </p>
                </div>
            )}
        </>
    );
};

export default Home;
