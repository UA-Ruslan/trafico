import React, {useEffect, useRef, useState} from "react";
import style from "./headerAndFirstSection.module.scss"
import btnArrowWhite from "../../images/headerAndFirstSection/Union.png"
import btnArrowRed from "../../images/fifthSectionFooter/next.png"
import model from "../../images/headerAndFirstSection/mobel.webp"
import NavBar from "./navBar/NavBar";
import Burger from "./burger/Burger";
import LogoAnim from "./logoAnim/LogoAnim";

const HeaderAndFirstSection = (props) => {
    const [isBurgerActive, setBurgerActive] = useState(null);
    const [isCarActive, setCarActive] = useState(false);
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const ref = useRef(null)


    useEffect(() => {
        setTimeout(() => {
            setAnimationPlayed(true)
        }, 2000)
    }, []);

    const burgerToggle = () => {
        if (isBurgerActive === null) {
            setBurgerActive(true);
        } else {
            setBurgerActive(!isBurgerActive);
        }
    };

    const activateCarAnim = () => {
        setCarActive(true);
        props.setBtnActive(true);
    };

    const deactivateCarAnim = () => {
        setCarActive(false);
        props.setBtnActive(false);
    };
    const btnRedirect = () => {
        ref.current.click();
    };

    return (
        <div className={style.headerAndFirstSectionWrapper}>
            <header className={style.header}>

                <LogoAnim/>
                <NavBar commonId={props.commonId}/>
                <Burger
                    commonId={props.commonId}
                    burgerToggle={burgerToggle}
                    isBurgerActive={isBurgerActive}
                    setBurgerActive={setBurgerActive}
                />

            </header>
            <div>
                <h1>Your awesome <br/> traffic permit <br/> consultant.</h1>
            </div>
            <div>
                <button onClick={btnRedirect} onMouseOver={activateCarAnim} onMouseOut={deactivateCarAnim} className={style.btnGetStarted}>
                    GET STARTED
                    {!props.btnActive
                        ? <img className={style.btnImg} src={btnArrowWhite} width="30px" height="12px" alt=""/>
                        :<img className={style.btnImg} src={btnArrowRed} width="30px" height="12px" alt=""/>}
                </button>
                <a ref={ref} style={{display:"none"}} href={`#${props.commonId.contactUs}`}></a>
            </div>
            <img
                className={!animationPlayed ? `${style.carImg} ${style.carImgFirstAnime}` : !isCarActive ? style.carImg : `${style.carImg} ${style.carAnim}`}
                src={model} height="394px"
                width="600px" alt="carModel"/>
        </div>
    )
}

export default HeaderAndFirstSection;