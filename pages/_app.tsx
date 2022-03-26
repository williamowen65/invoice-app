import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className='layout'>
            <Sidebar />
            <main>
                <Header />
                <Component {...pageProps} />
            </main>
        </div>
    );
}

export default MyApp;
