import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
