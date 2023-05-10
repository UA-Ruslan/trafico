import React from "react";
import style from "./headerAndFirstSection.module.scss"
import btnArrow from "../../images/headerAndFirstSection/Union.png"
import logoImg1 from "../../images/headerAndFirstSection/logoImg1.png"
import logoImg2 from "../../images/headerAndFirstSection/logoImg2.png"
import model from "../../images/headerAndFirstSection/mobel.png"
import NavBar from "../navBar/NavBar";
import Burger from "../burger/Burger";

const HeaderAndFirstSection = () => {
    return (
        <div className={style.headerAndFirstSectionWrapper}>
            <header className={style.header}>
                <div className={style.headerLogoWrapper}>
                    <img className={style.logoImg1} src={logoImg1} alt="logoImg1"/>
                    <img className={style.logoImg2} src={logoImg2} alt="logoImg2"/>
                    <a className={style.logoLink} href="#">TRAFICO.</a>
                </div>

                <NavBar/>
                <Burger/>

            </header>
            <div>
                <h1>Your awesome <br/> traffic permit <br/> consultant.</h1>
            </div>
            <div>
                <button className={style.btnGetStarted}>
                    GET STARTED
                    <img className={style.btnImg} src={btnArrow} width="30px" height="12px" alt=""/>
                </button>

            </div>
            <img className={style.carImg} src={model} height="394px" width="600px" alt="carModel"/>
        </div>
    )
}

export default HeaderAndFirstSection;