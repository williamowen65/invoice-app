import React from "react";
import logo from "./assets/logo.svg";
import moon from "./assets/icon-moon.svg";
import sun from "./assets/icon-sun.svg";
import avatar from "./assets/image-avatar.jpg";
import style from "./Sidebar.module.scss";

export default function Sidebar(props) {
    console.log(avatar);

    return (
        <div className={style.sidebar}>
            <div className={style.logo}>{logo()}</div>

            <div className={style.bottom}>
                <div className={style.theme}>
                    {moon()}
                    {sun()}
                </div>
                <div className={style.imgContainer}>
                    <img src={avatar.src} />
                </div>
            </div>
        </div>
    );
}
