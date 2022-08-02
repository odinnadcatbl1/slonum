import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Article from "../Article/Article";
import Points from "../Points/Points";
import Plan from "../Plan/Plan";

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Article />
            <Points />
            <Plan />
        </div>
    );
};

export default App;
