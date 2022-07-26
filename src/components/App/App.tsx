import Header from "../Header/Header";
import Intro from "../Intro/Intro";

import "./App.scss";

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Intro />
        </div>
    );
};

export default App;
