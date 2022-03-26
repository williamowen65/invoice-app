import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import moon from "./assets/icon-moon.svg";
import sun from "./assets/icon-sun.svg";
import avatar from "./assets/image-avatar.jpg";
import style from "./Sidebar.module.scss";

export default function Sidebar(props) {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDark(true);
            toggleDarkMode();
        }
    }, []);

    const toggleDarkMode = () => {
        const el = document.body;
        el.classList.toggle("dark-mode");
        setDark(!dark);
    };

    return (
        <div className={style.sidebar}>
            <div className={style.logo}>{logo()}</div>

            <div className={style.bottom}>
                <div className={style.theme} onClick={toggleDarkMode}>
                    {!dark && moon()}
                    {dark && sun()}
                </div>
                <div className={style.imgContainer}>
                    <img src={avatar.src} />
                </div>
            </div>
        </div>
    );
}
