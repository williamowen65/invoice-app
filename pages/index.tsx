import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Ticket from "../components/ticket/Ticket";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
    const [data, setData] = useState(null);
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        const data = fetch("/data.json");
        data.then((res) => res.json()).then((res) => {
            setData(res);
        });
    }, []);

    useEffect(() => {
        console.log(data);

        const tickets = data?.map((ticket) => {
            return <Ticket data={ticket} key={ticket.id} />;
        });
        setTickets(tickets);
    }, [data]);

    return <div className={styles.container}>{tickets}</div>;
};

export default Home;
