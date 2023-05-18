import './App.css';
import data from "./data/data";
import HeaderAndFirstSection from "./components/headerAndFirstSection/HeaderAndFirstSection";
import SecondSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/ThirdSection";
import ForthSection from "./components/forthSection/ForthSection";
import FifthSectionFooter from "./components/fifthSectionFooter/FifthSectionFooter";
import {useState} from "react";

function App() {

    const [btnActive, setBtnActive] = useState(false);

    return (
        <div className="app">
            <HeaderAndFirstSection
                btnActive={btnActive}
                setBtnActive={setBtnActive}
                commonId={data.commonId}
            />
            <SecondSection id={data.commonId.about}/>
            <ThirdSection id={data.commonId.howTo}/>
            <ForthSection id={data.commonId.faqs} questionData={data.questionData}/>
            <FifthSectionFooter
                btnActive={btnActive}
                setBtnActive={setBtnActive}
                commonId={data.commonId}
                clientsFeedback={data.clientsFeedback}
            />
        </div>
    );
}

export default App;
