import "./FreeBox.scss";
import { Link } from "react-router-dom";

const FreeBox = ({ FreeBoxLink, FreeBoxltImg, FreeBoxRtTow, FreeBoxRtTBrand, FreeBoxRtTNaming, FreeBoxPrice,FreeBoxPrice2 }) => {
  return (
    <Link to={FreeBoxLink} target="_blank" id="FreeBox">
      <div className="FreeBox-lt">
        <img src={FreeBoxltImg} alt="FreeBoxltImg" />
        <Link to='#'>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </Link>
      </div>
      <div className="FreeBox-rt">
        <div>
          <h3>{FreeBoxRtTow}</h3>
          <div className="FreeBox-rt_t">
            <p>
              <span>{FreeBoxRtTBrand}</span>
              {FreeBoxRtTNaming}
            </p>
          </div>
        </div>
        <div className="FreeBox-rt_bt">
          <span>
            <h2>{FreeBoxPrice}</h2> {FreeBoxPrice2}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FreeBox;
