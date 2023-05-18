import React, {useRef} from "react";
import style from "./fifthSectionFooter.module.scss";
import bgLine from "../../images/fifthSectionFooter/line.webp";
import carImg from "../../images/fifthSectionFooter/car.webp";
import columnImg from "../../images/fifthSectionFooter/column.webp";
import facebookImg from "../../images/fifthSectionFooter/facebook.webp";
import instagramImg from "../../images/fifthSectionFooter/instagram.webp";
import twitterImg from "../../images/fifthSectionFooter/twitter.webp";
import Slider from "./slider/Slider";
import Form from "./form/Form";
import Footer from "./footer/Footer";
import LogoAnim from "../headerAndFirstSection/logoAnim/LogoAnim";
import {AnimationOnScroll} from "react-animation-on-scroll";


const FifthSectionFooter = (props) => {
    const refTwitter = useRef(null);
    const refInstagram = useRef(null);
    const refFaceBook = useRef(null);

    const redirectTwitter = () => {
        refTwitter.current.click()
    };

    const redirectInstagram = () => {
        refInstagram.current.click()
    };

    const redirectFaceBook = () => {
        refFaceBook.current.click()
    };

    return (
        <div className={style.fifthSectionWrapper}>
            <div className={style.background}>
                <img className={style.bgLine} src={bgLine} alt="bgLine"/>
                <img className={style.carImg} src={carImg} alt="carImg"/>
            </div>
            <div className={style.contentWrapper}>
                <div>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                        <h3>ABOUT US</h3>
                        <h2>
                            Out Awesome <br/> Clients
                        </h2>
                    </AnimationOnScroll>

                </div>

                <Slider clientsFeedback={props.clientsFeedback}/>

            </div>
            <div className={style.formWrapper}>
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                    <div className={style.formCardWrapper}>
                        <img src={columnImg} alt="columnImg"/>
                        <p>
                            We provide traffic management
                            <br/> consultants so you get started
                            <br/> quickly, contact us for a quote
                            <br/> today!
                        </p>
                    </div>
                </AnimationOnScroll>

                <Form
                    setBtnActive={props.setBtnActive}
                    btnActive={props.btnActive}
                    commonId={props.commonId}
                />


            </div>
            <div className={style.logoHrefWrapper}>
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                    <LogoAnim/>
                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                    <Footer commonId={props.commonId}/>
                </AnimationOnScroll>


            </div>
            <div className={style.footerIconWrapper}>

                <div className={style.iconsWrapper}>
                    <div>
                        <img onClick={redirectFaceBook} src={facebookImg} alt="facebookImg"/>
                        <a ref={refFaceBook} style={{display: "none"}} href="https://www.facebook.com/"></a>
                    </div>

                    <div>
                        <img onClick={redirectInstagram} src={instagramImg} alt="instagramImg"/>
                        <a ref={refInstagram} style={{display: "none"}} href="https://www.instagram.com/"></a>
                    </div>
                    <div>
                        <img onClick={redirectTwitter} src={twitterImg} alt="twitterImg"/>
                        <a ref={refTwitter} style={{display: "none"}} href="https://twitter.com/"></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FifthSectionFooter;