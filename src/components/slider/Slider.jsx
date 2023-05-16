import React from "react";
import style from "./slider.module.scss"
import nextBtn from "../../images/fifthSectionFooter/next.png"
import backBtn from "../../images/fifthSectionFooter/back.png"
let users = [
    "first",
    "second",
    "third",
]

const user = users.map((user,index) => {
    return (
        <div key={index}>
            {user}
        </div>
    )
})

const Slider = () => {
    return (
        <div className={style.sliderWrapper}>
            <div className={style.sliderBtnWrapper}>
                <div>
                    <img src={backBtn} alt="backBtn"/>
                </div>
                <div>
                    <img src={nextBtn} alt="nextBtn"/>
                </div>
            </div>
            <div className={style.usersWrapper}>
                {user}
            </div>
        </div>
    )
}

export default Slider;