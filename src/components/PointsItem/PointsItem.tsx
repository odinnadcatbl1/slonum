import { IPointItem } from "../../types/types";

const PointsItem: React.FC<IPointItem> = ({ icon, text, href }) => {
    return (
        <div className="points__item">
            <div className="points__img">
                <img src={icon} alt="" />
            </div>
            <div className="points__text">
                {text}&nbsp;
                <a href="#">{href}</a>
            </div>
        </div>
    );
};

export default PointsItem;
