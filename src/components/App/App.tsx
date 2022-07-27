import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Article from "../Article/Article";

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Article />
        </div>
    );
};

export default App;
