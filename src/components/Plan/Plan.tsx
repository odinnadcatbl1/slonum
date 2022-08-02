import dottedLine from "../../assets/img/punctir.png";

const Plan: React.FC = () => {
    return (
        <div className="plan">
            <div className="container">
                <div className="plan__inner">
                    <h2 className="subtitle">
                        Пошаговый <span>план</span>
                    </h2>
                    <div className="plan__dott">
                        <img src={dottedLine} />
                    </div>
                    <div className="plan__items">
                        <div className="plan__item">
                            <div className="item__number">1</div>
                            <div className="item__text">
                                Зарегистрируйтесь
                                <br />
                                на конкурс <a href="#">Здесь</a>
                            </div>
                        </div>

                        <div className="plan__item">
                            <div className="item__number">2</div>
                            <div className="item__text">
                                Выполните все
                                <br />
                                условия конкурса
                            </div>
                        </div>

                        <div className="plan__item">
                            <div className="item__number">3</div>
                            <div className="item__text">
                                Загрузите рисунок <a href="#">Здесь</a>
                                <br /> или в Личном кабинете
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;
