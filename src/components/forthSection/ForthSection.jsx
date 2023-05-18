import React, {useEffect, useState} from "react";
import style from "../forthSection/forthSection.module.scss";
import forthSectionImg from "../../images/forthSection/ezgif.com-gif-maker.webp";
import {AnimationOnScroll} from 'react-animation-on-scroll';

const ForthSection = (props) => {
    const [activeItem, setActiveItem] = useState(null);
    const [pDisplayNone, setPDisplayNone] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        let interval
        if (activeItem != null) {
            interval = setTimeout(() => {
                setPDisplayNone(true)
            }, 300)
        } else {
            setPDisplayNone(false)
        }
        return () => clearTimeout(interval);

    }, [activeItem]);

    const currentItems = props.questionData.slice(currentIndex, currentIndex + itemsPerPage);

    const handleNext = () => {
        setCurrentIndex(currentIndex + itemsPerPage);
    };

    const handleBack = () => {
        setCurrentIndex(Math.max(currentIndex - itemsPerPage, 0));
    };
    const activateDropItem = (index) => {
        setActiveItem(index);
    };
    const deactivateDropItem = () => {
        setActiveItem(null);
    };

    let questionItems = currentItems.map((el, index) => {
        return (

            <div tabIndex={0} onBlur={deactivateDropItem} key={index} className={style.faqInfoBoxWrapper}>

                <div className={style.faqInfoBox}>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__zoomIn">
                        <div className={style.elWrapper}>
                            <p>{el.question}</p>
                        </div>
                    </AnimationOnScroll>
                    <div className={style.symbolWrapper}>
                        {activeItem === index
                            ? <div className={style.minusWrapper} onClick={deactivateDropItem}>
                                <div className={style.minus}></div>
                            </div>
                            : <div className={style.plusWrapper} onClick={() => {
                                activateDropItem(index)
                            }}>
                                <div className={style.plus1}></div>
                                <div className={style.plus2}></div>
                            </div>}
                    </div>
                </div>

                <div className={style.dropItemWrapper}>
                    <div className={activeItem !== index ? style.faqDropItemInactive : style.faqDropItemActive}>
                        <p className={pDisplayNone ? style.pActive : style.pInactive}>{el.answer}</p>
                    </div>
                </div>

            </div>

        )
    })

    return (
        <div id={props.id} className={style.forthSectionWrapper}>
            <div className={style.faqTopBlock}>
                <div className={style.faqTextWrapper}>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                        <h3 className={style.h3Faq}>FAQ</h3>
                        <h2>Questions and Answers <br/> on Professional Traffic <br/> Permits:</h2>
                    </AnimationOnScroll>
                </div>
                <div className={style.faqImgWrapper}>
                    <img src={forthSectionImg} alt="forthSectionImg"/>
                </div>
            </div>
            <div className={style.dataItemsWrapper}>
                {questionItems}
            </div>
            <div className={style.buttonsWrapper}>
                <button onClick={handleBack} className={style.goBackLoadMoreBtnWrapper}>
                    <div className={style.h3BtnWrapper}>
                        <h3>GO BACK</h3>
                    </div>
                    <div className={style.minusWrapper}>
                        <div className={style.minus}></div>
                    </div>
                </button>

                <button disabled={currentIndex >= props.questionData.length - itemsPerPage} onClick={handleNext}
                        className={style.goBackLoadMoreBtnWrapper}>
                    <div className={style.h3BtnWrapper}>
                        <h3>LOAD MORE</h3>
                    </div>
                    <div className={style.plusWrapper}>
                        <div className={style.plus1}></div>
                        <div className={style.plus2}></div>
                    </div>
                </button>
            </div>
        </div>
    )
}


export default ForthSection;