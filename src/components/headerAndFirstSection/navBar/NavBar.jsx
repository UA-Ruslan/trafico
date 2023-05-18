import React, {useRef} from "react";
import style from "./navBar.module.scss";

const NavBar = (props) => {
    const ref = useRef(null)
    const btnRedirect = () => {
        ref.current.click()
    }
    return (
        <div className={style.headerLinksWrapper}>
            <a className={style.headerLink} href={`#${props.commonId.about}`}>ABOUT</a>
            <a className={style.headerLink} href={`#${props.commonId.howTo}`}>HOW TO</a>
            <a className={style.headerLink} href={`#${props.commonId.faqs}`}>FAQS</a>
            <button onClick={btnRedirect} className={style.btnContactUs}>CONTACT US</button>
            <a style={{display:"none"}} ref={ref} href={`#${props.commonId.contactUs}`}></a>
        </div>
    )
}

export default NavBar;