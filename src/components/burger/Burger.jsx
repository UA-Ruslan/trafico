import React, {useEffect, useState} from "react";
import style from "./burger.module.scss"

const Burger = (props) => {
    const [linksWrapperActive, setLinksWrapperActive] = useState(false)
    useEffect(() => {
        let timeout;
        if (props.isBurgerActive) {
            timeout = setTimeout(() => {
                setLinksWrapperActive(true)
            }, 500)
        } else {
            setLinksWrapperActive(false)
        }
        return () => clearTimeout(timeout);
    }, [props.isBurgerActive])

    return (
        <div className={style.burgerWrapper}>
            <div onClick={props.burgerToggle} className={style.burgerBtnWrapper}>
                <div className={props.isBurgerActive === null
                    ? style.burgerBtnItem
                    : props.isBurgerActive
                        ? `${style.burgerBtnItem} ${style.item1ForwardAnim}`
                        : `${style.burgerBtnItem} ${style.item1BackwardAnim}`}>

                </div>

                <div className={props.isBurgerActive === null
                    ? style.burgerBtnItem : props.isBurgerActive
                        ? `${style.burgerBtnItem} ${style.item2ForwardAnim}`
                        : `${style.burgerBtnItem} ${style.item2BackwardAnim}`}>
                </div>

                <div className={props.isBurgerActive === null
                    ? style.burgerBtnItem
                    : props.isBurgerActive
                        ? `${style.burgerBtnItem} ${style.item3ForwardAnim}`
                        : `${style.burgerBtnItem} ${style.item3BackwardAnim}`}>

                </div>

            </div>

            <div
                className={props.isBurgerActive === null
                    ? style.displayNone
                    : props.isBurgerActive
                        ? style.dropdownMenuActive
                        : style.dropdownMenuInactive}>

                <div className={linksWrapperActive ? style.linksWrapperActive : style.displayNone}>
                    <div className={style.linkWrapper}>
                        <a className={style.link} href="#">ABOUT</a>
                    </div>
                    <div className={style.linkWrapper}>
                        <a className={style.link} href="#">HOW TO</a>
                    </div>
                    <div className={style.linkWrapper}>
                        <a className={style.link} href="#">FAQS</a>
                    </div>

                    <button className={style.btnContactUs}>CONTACT <br/> US</button>

                </div>
            </div>
        </div>
    )
}

export default Burger;