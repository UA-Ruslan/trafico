import './App.css';
import data from "./data/data";
import HeaderAndFirstSection from "./components/headerAndFirstSection/HeaderAndFirstSection";
import SecondSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/ThirdSection";
import ForthSection from "./components/forthSection/ForthSection";
import FifthSection from "./components/fifthSection/FifthSection";

function App() {
    return (
        <div className="app">
            <HeaderAndFirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <ForthSection questionData={data.questionData}/>
            {/*<FifthSection/>*/}
        </div>
    );
}

export default App;
