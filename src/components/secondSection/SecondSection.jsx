import React from "react";
import style from "./secondSection.module.scss";
import img1 from "../../images/secondSection/img1.webp";
import {AnimationOnScroll} from 'react-animation-on-scroll';

const SecondSection = (props) => {
    return (
        <div id={props.id} className={style.secondSectionWrapper}>
            <div className={style.aboutUsWrapper}>
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                    <div className={style.aboutUsPart1}>
                        <h3 className={style.aboutUs}>ABOUT US</h3>
                        <p className={style.aboutUsP1Style}>
                            The occupational traffic permit is one of the most <br/>
                            important things in the company when carrying out <br/>
                            freight transport. In fact, it is a prerequisite for doing <br/>
                            business traffic at all.
                        </p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                    <div className={style.aboutUsPart2}>
                        <p className={style.aboutUsP2Style}>
                            How do you do when you need to obtain <br/>
                            a commercial traffic permit for freight <br/>
                            transport to your business?
                        </p>
                    </div>
                </AnimationOnScroll>
            </div>
                <div>
                    <img className={style.secondSectionImg} src={img1} alt="second-section-img"/>
                </div>
        </div>
    )
}

export default SecondSection;

