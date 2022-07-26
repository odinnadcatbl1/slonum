import { ITimer } from "../../types/types";

import "./Timer.scss";

const Timer: React.FC<ITimer> = ({ days }) => {
    return (
        <div className="timer">
            <div className="timer__items">
                <div className="timer__item">
                    <div className="timer__value">01</div>
                    <div className="timer__item-name">дней</div>
                </div>
                <span>:</span>
                <div className="timer__item">
                    <div className="timer__value">09</div>
                    <div className="timer__item-name">часов</div>
                </div>
                <span>:</span>
                <div className="timer__item">
                    <div className="timer__value">43</div>
                    <div className="timer__item-name">минут</div>
                </div>
            </div>
            <div className="timer__utc">по МСК</div>
        </div>
    );
};

export default Timer;
