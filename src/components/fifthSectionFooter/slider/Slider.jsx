import React, {useEffect, useState} from "react";
import style from "./slider.module.scss";
import nextBtn from "../../../images/fifthSectionFooter/next.png";
import backBtn from "../../../images/fifthSectionFooter/back.png";
import {AnimationOnScroll} from "react-animation-on-scroll";


const Slider = (props) => {
    const [windowWidth, setWindowWidth] = useState(null);
    const [dif, setDif] = useState(null);
    const [numberClick, setNumberClick] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [startY, setStartY] = useState(null);
    const [startX, setStartX] = useState(null);
    const [endX, setEndX] = useState(null);

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        setDif(startX - endX);
    }, [startX, endX]);

    useEffect(() => {
        setDif(null)
    }, [numberClick]);

    const position = {
        left: windowWidth > 768 ? numberClick * -430 + "px" : numberClick * (-windowWidth + 10) + "px",
        transition: "0.3s"
    };
    const handleNext = () => {
        setNumberClick(numberClick + 1);
    };

    const handleBack = () => {
        setNumberClick(numberClick - 1);
    };
    const userWidthStatic = {
        width: "420px",
    };
    const userWidthInherit = {
        width: (windowWidth - 20) + "px",
    };
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
        setIsScrolling(false);
    };

    const handleTouchEnd = (e) => {
        if (!isScrolling) {
            setEndX(e.changedTouches[0].clientX);
            handleSwipe();
        }
    };

    const handleSwipe = () => {
        if (Math.abs(dif) >= 100 && numberClick < props.clientsFeedback.length - 1 && dif > 0) {
            setNumberClick(numberClick + 1);
        } else if (Math.abs(dif) >= 100 && numberClick > 0 && dif < 0) {
            setNumberClick(numberClick - 1);
        }
    };

    const handleTouchMove = (e) => {
        if (!isScrolling) {
            const scrollThreshold = 10;
            const deltaY = Math.abs(e.touches[0].clientY - startY);
            const deltaX = Math.abs(e.touches[0].clientX - startX);

            if (deltaY > scrollThreshold && deltaY > deltaX) {
                setIsScrolling(true);
            }
        }
    };

    const user = props.clientsFeedback.map((user, index) => {
        return (
            <div key={index} style={windowWidth > 768 ? userWidthStatic : userWidthInherit}
                 className={style.userWrapper}>
                <AnimationOnScroll animateOnce={true} animateIn="animate__zoomIn">
                    <div onTouchMove={handleTouchMove} className={style.messageWrapper}>
                        <p>{user.clientMessage}</p>
                    </div>
                </AnimationOnScroll>
                <div className={style.photoWrapper}>
                    <div>
                        <img src={user.clientPhoto} alt="userPhoto"/>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className={style.sliderWrapper}>
            <div className={style.sliderButtonsWrapper}>
                <div className={style.sliderBtnWrapper}>
                    <button style={{border: "none", background: "none", cursor: "pointer"}}
                            disabled={numberClick === 0}
                            onClick={handleBack}>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__shakeY">
                            <img src={backBtn} alt="nextBtn"/>
                        </AnimationOnScroll>
                    </button>

                </div>
                <div className={style.sliderBtnWrapper}>
                    <button style={{border: "none", background: "none", cursor: "pointer"}}
                            disabled={numberClick === props.clientsFeedback.length - 1}
                            onClick={handleNext}>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__shakeY">
                            <img src={nextBtn} alt="nextBtn"/>
                        </AnimationOnScroll>
                    </button>

                </div>
            </div>
            <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd} style={{width: "calc(100% + 40px)"}} className={style.clientsWrapper}>
                <div style={position} className={style.usersWrapper}>
                    {user}
                </div>
            </div>
        </div>
    )
}

export default Slider;