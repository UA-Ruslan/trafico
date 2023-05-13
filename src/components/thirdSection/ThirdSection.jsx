import React from "react";
import style from "../thirdSection/thirdSection.module.scss";
import thirdSectionImg from "../../images/thirdSection/illustrations.webp"

const ThirdSection = () => {
    return (
        <div className={style.thirdSectionWrapper}>
            <div>
                <img className={style.thirdSectionImg} src={thirdSectionImg} alt="thirdSectionImg"/>
            </div>
            <div className={style.howToPlayWrapper}>
                <h3 className={style.howToPlayTitle}>HOW TO APPLY</h3>
                <p className={style.howToPlayP1Style}>
                    When applying for a traffic permit, there are certain <br/>
                    requirements that you must meet that are included in <br/>
                    the examination: requirements for professional <br/>
                    knowledge, solid establishment, good reputation and<br/>
                    financial resources. Important to remember is to confirm <br/>
                    your application for a traffic permit by the company's<br/>
                    company signer or CEO.
                </p>
            </div>
        </div>
    )
}

export default ThirdSection;