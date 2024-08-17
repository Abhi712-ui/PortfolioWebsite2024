
import './App.css';
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Descriptions from "./components/Descriptions"

function App() {
  return (
    <div className={"container"}>
        <header className={"header"}>
            <h1>Abhimanyu Sharma</h1>
        </header>
        <div className={"content"}>
            <div className={"left-column"}>
                <Descriptions/>
            </div>
            <div className={"right-column"}>
                <Experiences />
                <Projects/>
            </div>
        </div>
    </div>
  );
}

export default App;
