import "./Header.scss";
import logoIcon from "../../assets/svg/logo.svg";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">
                        <a href="/">
                            <img src={logoIcon} alt="СлонУМ" />
                        </a>
                    </div>

                    <button className="header__button">Войти</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
