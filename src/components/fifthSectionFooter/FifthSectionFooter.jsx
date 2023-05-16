import React from "react";
import style from "./fifthSectionFooter.module.scss"
import bgLine from "../../images/fifthSectionFooter/line.webp"
import carImg from "../../images/fifthSectionFooter/car.webp"
import Slider from "../slider/Slider";
import Form from "../form/Form";

const FifthSectionFooter = () => {
    return (
        <div className={style.fifthSectionWrapper}>
            <div className={style.background}>
                <img className={style.bgLine} src={bgLine} alt="bgLine"/>
                <img className={style.carImg} src={carImg} alt="carImg"/>
            </div>
            <div className={style.contentWrapper}>
                <div>
                    <h3>ABOUT US</h3>
                    <h2>
                        Out Awesome <br/> Clients
                    </h2>
                </div>

                <Slider/>

            </div>
            <div >
                <div>

                </div>

                <Form/>

            </div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default FifthSectionFooter;