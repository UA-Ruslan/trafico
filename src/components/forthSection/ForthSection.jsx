import React, {useEffect, useState} from "react";
import style from "../forthSection/forthSection.module.scss";
import forthSectionImg from "../../images/forthSection/ezgif.com-gif-maker.webp"

const ForthSection = (props) => {
    const [activeItem, setActiveItem] = useState(null);
    const [pDisplayNone, setPDisplayNone] = useState(false)
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

    }, [activeItem])

    const currentItems = props.questionData.slice(currentIndex, currentIndex + itemsPerPage);

    const handleNext = () => {
        setCurrentIndex(currentIndex + itemsPerPage);
    };

    const handleBack = () => {
        setCurrentIndex(Math.max(currentIndex - itemsPerPage, 0));
    };
    const activateDropItem = (index) => {
        setActiveItem(index)
    }
    const deactivateDropItem = () => {
        setActiveItem(null)
    }

    let questionItems = currentItems.map((el, index) => {
        return (
            <div tabIndex={0} onBlur={deactivateDropItem}  key={index} className={style.faqInfoBoxWrapper}>
                <div className={style.faqInfoBox}>
                    <div className={style.elWrapper}>
                        <p>{el.question}</p>
                    </div>
                    <div className={style.symbolWrapper}>
                        {activeItem === index
                            ? <div className={style.minusWrapper} onClick={deactivateDropItem}>
                                <div  className={style.minus}></div>
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
        <div className={style.forthSectionWrapper}>
            <div className={style.faqTopBlock}>
                <div className={style.faqTextWrapper}>
                    <h3 className={style.h3Faq}>FAQ</h3>
                    <h2>Questions and Answers <br/> on Professional Traffic <br/> Permits:</h2>
                </div>
                <div className={style.faqImgWrapper}>
                    <img src={forthSectionImg} alt="forthSectionImg"/>
                </div>
            </div>
            <div className={style.dataItemsWrapper}>
                {questionItems}
            </div>
            <button onClick={handleBack}>BACK</button>
            <button disabled={currentIndex >= props.questionData.length - itemsPerPage} onClick={handleNext}>NEXT</button>
        </div>
    )
}



export default ForthSection;