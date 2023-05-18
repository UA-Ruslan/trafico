import React from "react";
import style from "./footer.module.scss";

const Footer = (props) => {
    return (
        <div className={style.footerLinksWrapper}>
            <a className={style.footerLink} href={`#${props.commonId.about}`}>ABOUT</a>
            <a className={style.footerLink} href={`#${props.commonId.howTo}`}>HOW TO</a>
            <a className={style.footerLink} href={`#${props.commonId.faqs}`}>FAQS</a>
        </div>
    )
}

export default Footer;