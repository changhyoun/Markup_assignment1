import "./ShearBox.scss";
import { Link } from "react-router-dom";

const ShearBox = ({ShearBoxLink, ShearBoxltImg, ShearBoxRtTow, ShearBoxRtTBrand, ShearBoxRtTNaming, ShearBoxPrice,ShearBoxPrice2 }) => {
  return (
    <Link to={ShearBoxLink} target="_blank" id="ShearBox">
      <div className="ShearBox-lt">
        <img src={ShearBoxltImg} alt="ShearBoxltImg" />
        <Link to='#'>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </Link>
      </div>
      <div className="ShearBox-rt">
        <div>
          <h3>{ShearBoxRtTow}</h3>
          <div className="ShearBox-rt_t">
            <p>
              <span>{ShearBoxRtTBrand}</span>
              {ShearBoxRtTNaming}
            </p>
          </div>
        </div>
        <div className="ShearBox-rt_bt">
          <span>
            <h2>{ShearBoxPrice}</h2> {ShearBoxPrice2}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ShearBox;
