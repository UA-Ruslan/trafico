import React, {useState} from "react";
import style from "./burger.module.scss"

const Burger = () => {
    const [isBurgerActive, setBurgerActive] = useState(false)
    const burgerToggle = () => {
        setBurgerActive(!isBurgerActive)
    }
    return (
        <div onClick={burgerToggle}
             className={style.burgerWrapper}>
            <div></div>
            <div></div>
            <div className={isBurgerActive ? style.burgerActive : style.burgerInactive}>

            </div>
        </div>
    )
}

export default Burger;