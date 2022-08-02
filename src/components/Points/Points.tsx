import starIcon from "../../assets/svg/star.svg";
import personIcon from "../../assets/svg/person.svg";
import certificateIcon from "../../assets/svg/certification.svg";
import giftIcon from "../../assets/svg/gift-box.svg";
import mailIcon from "../../assets/svg/email.svg";
import vkCalendarIcon from "../../assets/svg/vk-calendar.svg";

import PointsItem from "../PointsItem/PointsItem";
import { IPointItem } from "../../types/types";

const Points: React.FC = () => {
    const PointsList: IPointItem[] = [
        {
            icon: starIcon,
            text: "Шанс занять 1 место — в вашем городе и по всей России",
        },
        {
            icon: personIcon,
            text: "Развитие самостоятельности + свободное время для родителей ;)",
        },
        {
            icon: certificateIcon,
            text: "Персональный диплом в разных номинациях каждому участнику",
        },
        {
            icon: giftIcon,
            text: "Призы и скидки для подписчиков и авторизованных пользователей",
        },
        {
            icon: mailIcon,
            text: "Бесплатный диплом на email — через 1 день после конкурса",
        },
        {
            icon: vkCalendarIcon,
            text: "Публикация работ победителей во ВКонтакте.",
            href: "Подписывайтесь!",
        },
    ];

    return (
        <div className="points">
            <div className="container">
                <div className="points__inner">
                    <h2 className="subtitle">
                        Для чего <span>нужно</span> участвовать
                    </h2>
                </div>
                <div className="points__list">
                    {PointsList.map((point) => (
                        <PointsItem
                            icon={point.icon}
                            text={point.text}
                            href={point.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Points;
