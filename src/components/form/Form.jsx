import React from "react";
import style from "./form.module.scss"
import btnArrow from "../../images/headerAndFirstSection/Union.png";

const Form = () => {
    const submit = (e) => {
        e.preventDefault()
    }
    return (
        <div className={style.formWrapper}>
            <form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className={style.inputWrapper}>
                    <div className={style.spanWrapper}>
                        <span>Name</span>
                    </div>
                    <div>
                        <input placeholder="Your name" className={style.input} type="text"/>
                    </div>
                </div>
                <div className={style.inputWrapper}>
                    <div className={style.spanWrapper}>
                        <span>Email address</span>
                    </div>
                    <div>
                        <input placeholder="Your email address" className={style.input} type="email"/>
                    </div>
                </div>
                <div className={style.btnWrapper}>
                    <button onClick={submit} className={style.btnGetStarted}>
                        <div>GET STARTED</div>
                        <img className={style.btnImg} src={btnArrow} width="30px" height="12px" alt="btnImg"/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;
