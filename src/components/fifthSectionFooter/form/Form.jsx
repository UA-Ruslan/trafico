import React, {useState} from "react";
import style from "./form.module.scss";
import btnArrowWhite from "../../../images/headerAndFirstSection/Union.png";
import btnArrowRed from "../../../images/fifthSectionFooter/next.png";
import {AnimationOnScroll} from "react-animation-on-scroll";

const Form = (props) => {
    const [inputValue, setInputValue] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: event.target[0].value,
            email: event.target[1].value,
        };
        setInputValue(formData);
        event.target.reset();
    };
    const btnActive = () => {
        props.setBtnActive(true);
    };

    const btnInactive = () => {
        props.setBtnActive(false);
    };


    return (
        <div id={props.commonId.contactUs} className={style.formWrapper}>

            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className={style.inputWrapper}>
                    <div className={style.spanWrapper}>
                        <span>Name</span>
                    </div>
                    <div>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp">
                            <input required aria-describedby="field is required" placeholder="Your name"
                                   className={style.input} type="text"/>
                        </AnimationOnScroll>

                    </div>
                </div>
                <div className={style.inputWrapper}>
                    <div className={style.spanWrapper}>
                        <span>Email address</span>
                    </div>
                    <div>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp">
                            <input required aria-describedby="field is required" placeholder="Your email address"
                                   className={style.input} type="email"/>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className={style.btnWrapper}>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp">
                        <button onMouseOver={btnActive} onMouseOut={btnInactive} className={style.btnGetStarted}>
                            <div>GET STARTED</div>
                            {!props.btnActive
                                ?
                                <img className={style.btnImg} src={btnArrowWhite} width="30px" height="12px"
                                     alt="btnImg"/>
                                : <img className={style.btnImg} src={btnArrowRed} width="30px" height="12px"
                                       alt="btnImg"/>}
                        </button>
                    </AnimationOnScroll>
                    <span
                        className={!inputValue ? style.spanSuccess : `${style.spanSuccess} ${style.spanSuccessActive}`}>Successfully submitted</span>
                </div>
            </form>
        </div>
    )
}

export default Form;
