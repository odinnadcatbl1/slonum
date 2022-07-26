import "./Intro.scss";
import introBcg from "../../assets/img/intro.png";
import Timer from "../Timer/Timer";

const Intro: React.FC = () => {
    return (
        <div className="intro">
            <div className="container">
                <div className="intro__inner">
                    <div className="intro__left">
                        <div className="intro__text">
                            <span className="intro__text-company">
                                от компании слонум
                            </span>
                            <h1>Всероссийский конкурс Детского рисунка</h1>
                            <div className="intro__text-info">
                                Участвуйте в конкурсе и получайте призы в
                                различных номинациях детского рисунка для всех
                                возрастов
                            </div>
                        </div>
                        <div className="intro__left-actions">
                            <button className="intro__button">
                                Участвовать
                            </button>
                            <div className="intro__timer">
                                <Timer endtime={"2022-08-05"} />
                            </div>
                        </div>
                    </div>
                    <div className="intro__right">
                        <img src={introBcg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
