import React, {useEffect, useState} from "react";
import logoImg1 from "../../../images/headerAndFirstSection/logoImg1.png";
import logoImg2 from "../../../images/headerAndFirstSection/logoImg2.png";
import style from "./logoAnim.module.scss"

const LogoAnim = () => {
    const [isLogoActive, setLogoActive] = useState(false);

    useEffect(() => {
        if (isLogoActive) {
            setTimeout(() => {
                setLogoActive(false);
            }, 1000);
        }
    }, [isLogoActive]);

    const activateLogoAnim = () => {
        setLogoActive(true)
    };

    const deactivateLogoAnim = () => {
        setLogoActive(true);
    };
    return (
        <div className={style.logoWrapper} onMouseOver={activateLogoAnim} onMouseOut={deactivateLogoAnim}>
            <img className={!isLogoActive ? style.logoImg1 :`${style.logoImg1} ${style.logoImg1Active}`}
                 src={logoImg1} alt="logoImg1"/>
            <img className={!isLogoActive ? style.logoImg2 : `${style.logoImg1}  ${style.logoImg2Active}`}
                 src={logoImg2} alt="logoImg2"/>
            <p className={style.logoLink} href="#">TRAFICO.</p>
        </div>
    )
}

export default LogoAnim;