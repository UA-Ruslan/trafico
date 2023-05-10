import React from "react";
import style from "./secondSection.module.scss"
import img1 from "../../images/secondSection/img1.png"

const SecondSection = () => {
    return (
        <div className={style.secondSectionWrapper}>
            <div className={style.aboutUsWrapper}>
                <div className={style.aboutUsPart1}>
                    <h3 className={style.aboutUs}>ABOUT US</h3>
                    <p className={style.aboutUsP1Style}>
                        The occupational traffic permit is one of the most <br/>
                        important things in the company when carrying out <br/>
                        freight transport. In fact, it is a prerequisite for doing <br/>
                        business traffic at all.
                    </p>
                </div>
                <div className={style.aboutUsPart2}>
                    <p className={style.aboutUsP2Style}>
                        How do you do when you need to obtain <br/>
                        a commercial traffic permit for freight <br/>
                        transport to your business?
                    </p>
                </div>
            </div>
            <div>
                <img src={img1} alt="second-section-img"/>
            </div>
        </div>
    )
}

export default SecondSection;