import React from "react";
import style from "./navBar.module.scss";

const NavBar = () => {
    return (
        <div className={style.headerLinksWrapper}>
            <a className={style.headerLink} href="#">ABOUT</a>
            <a className={style.headerLink} href="#">HOW TO</a>
            <a className={style.headerLink} href="#">FAQS</a>
            <button className={style.btnContactUs}>CONTACT US</button>
        </div>
    )
}

export default NavBar;