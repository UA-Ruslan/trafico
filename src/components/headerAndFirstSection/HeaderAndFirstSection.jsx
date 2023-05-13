import React, {useEffect, useState} from "react";
import style from "./headerAndFirstSection.module.scss"
import btnArrow from "../../images/headerAndFirstSection/Union.png"
import logoImg1 from "../../images/headerAndFirstSection/logoImg1.png"
import logoImg2 from "../../images/headerAndFirstSection/logoImg2.png"
import model from "../../images/headerAndFirstSection/mobel.webp"
import NavBar from "../navBar/NavBar";
import Burger from "../burger/Burger";

const HeaderAndFirstSection = () => {
    const [isBurgerActive, setBurgerActive] = useState(null);
    const [isCarActive, setCarActive] = useState(false);
    const [isLogoActive, setLogoActive] = useState(false);
    const [animationPlayed, setAnimationPlayed] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimationPlayed(true)
        }, 2000)
    }, []);

    useEffect(() => {
        if (isLogoActive) {
            setTimeout(() => {
                setLogoActive(false);
            }, 1000);
        }
    }, [isLogoActive]);

    const burgerToggle = () => {
        if (isBurgerActive === null) {
            setBurgerActive(true);
        } else {
            setBurgerActive(!isBurgerActive);
        }
    };

    const activateCarAnim = () => {
        setCarActive(true)
    };

    const deactivateCarAnim = () => {
        setCarActive(false)
    };

    const activateLogoAnim = () => {
        setLogoActive(true)
    };

    const deactivateLogoAnim = () => {
        setLogoActive(true);
    };

    return (
        <div className={style.headerAndFirstSectionWrapper}>
            <header className={style.header}>
                <div onMouseOver={activateLogoAnim} onMouseOut={deactivateLogoAnim} className={style.headerLogoWrapper}>
                    <img className={!isLogoActive ? style.logoImg1 : `${style.logoImg1} ${style.logoImg1Active}`}
                         src={logoImg1} alt="logoImg1"/>
                    <img className={!isLogoActive ? style.logoImg2 : `${style.logoImg1} ${style.logoImg2Active}`}
                         src={logoImg2} alt="logoImg2"/>
                    <a className={style.logoLink} href="#">TRAFICO.</a>
                </div>

                <NavBar/>
                <Burger burgerToggle={burgerToggle} isBurgerActive={isBurgerActive}/>

            </header>
            <div>
                <h1>Your awesome <br/> traffic permit <br/> consultant.</h1>
            </div>
            <div>
                <button onMouseOver={activateCarAnim} onMouseOut={deactivateCarAnim} className={style.btnGetStarted}>
                    GET STARTED
                    <img className={style.btnImg} src={btnArrow} width="30px" height="12px" alt=""/>
                </button>

            </div>
            <img
                className={!animationPlayed ? `${style.carImg} ${style.carImgFirstAnime}` : !isCarActive ? style.carImg : `${style.carImg} ${style.carAnim}`}
                src={model} height="394px"
                width="600px" alt="carModel"/>
        </div>
    )
}

export default HeaderAndFirstSection;