import { useEffect, useState } from "react";
import { ITimer } from "../../types/types";
import { getTimeRemaining } from "../../utils/getTimeRemaining";

import "./Timer.scss";

const Timer: React.FC<ITimer> = ({ endtime }) => {
    const [minutes, setMinutes] = useState(
        getTimeRemaining(endtime).minutesWithZero
    );
    const [days, setDays] = useState(getTimeRemaining(endtime).daysWithZero);
    const [hours, setHours] = useState(getTimeRemaining(endtime).hoursWithZero);

    useEffect(() => {
        if (getTimeRemaining(endtime).remainingTime > 0) {
            setTimeout(setMinutes, 60000, +minutes - 1);

            setDays(getTimeRemaining(endtime).daysWithZero);
            setHours(getTimeRemaining(endtime).hoursWithZero);
        }
    }, [minutes]);

    return (
        <div className="timer">
            <div className="timer__items">
                <div className="timer__item">
                    <div className="timer__value">{days}</div>
                    <div className="timer__item-name">дней</div>
                </div>
                <span>:</span>
                <div className="timer__item">
                    <div className="timer__value">{hours}</div>
                    <div className="timer__item-name">часов</div>
                </div>
                <span>:</span>
                <div className="timer__item">
                    <div className="timer__value">{minutes}</div>
                    <div className="timer__item-name">минут</div>
                </div>
            </div>
            <div className="timer__utc">по МСК</div>
        </div>
    );
};

export default Timer;
