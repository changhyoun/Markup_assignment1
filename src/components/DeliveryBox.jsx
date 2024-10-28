import "./DeliveryBox.scss";
import { Link } from "react-router-dom";

const DeliveryBox = ({DeliveryLink, DeliveryltImg, DeliveryBoxRtTow, DeliveryBoxRtTBrand, DeliveryBoxRtTNaming, DeliveryBoxPrice,DeliveryBoxPrice2 }) => {
  return (
    <Link to={DeliveryLink} target="_blank" id="DeliveryBox">
      <div className="DeliveryBox-lt">
        <img src={DeliveryltImg} alt="DeliveryBoxltImg" />
        <Link to='#'>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </Link>
      </div>
      <div className="DeliveryBox-rt">
        <div>
          <h3>{DeliveryBoxRtTow}</h3>
          <div className="DeliveryBox-rt_t">
            <p>
              <span>{DeliveryBoxRtTBrand}</span>
              {DeliveryBoxRtTNaming}
            </p>
          </div>
        </div>
        <div className="DeliveryBox-rt_bt">
          <span>
            <h2>{DeliveryBoxPrice}</h2> {DeliveryBoxPrice2}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DeliveryBox;
