import './App.css';
import data from "./data/data";
import HeaderAndFirstSection from "./components/headerAndFirstSection/HeaderAndFirstSection";
import SecondSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/ThirdSection";
import ForthSection from "./components/forthSection/ForthSection";
import FifthSectionFooter from "./components/fifthSectionFooter/FifthSectionFooter";

function App() {
    return (
        <div className="app">
            <HeaderAndFirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <ForthSection questionData={data.questionData}/>
            <FifthSectionFooter/>
        </div>
    );
}

export default App;
