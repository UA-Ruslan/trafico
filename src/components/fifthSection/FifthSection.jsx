import React from "react";
import style from "./fifthSection.module.scss"
let arr = [1, 2, 3, 4]
const el = arr.map((el, index) => {
    return (
        <div className={style.elWrapper}>
            <div className={style.el}>{el}</div>
            <div className={style.dropDown}></div>
        </div>
    )
})
const FifthSection = () => {
    return (
        <div className={style.fifthSectionWrapper}>
            {el}
        </div>
    )
}

export default FifthSection;