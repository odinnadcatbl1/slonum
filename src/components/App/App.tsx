import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Article from "../Article/Article";
import Points from "../Points/Points";

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Article />
            <Points />
        </div>
    );
};

export default App;
