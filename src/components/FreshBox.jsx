// FreshBox.jsx
import "./FreshBox.scss";
import { Link } from "react-router-dom";

const FreshBox = ({FreshLink, FreshBoxltImg, FreshBoxRtTow, FreshBoxRtTBrand, FreshBoxRtTNaming, FreshBoxPrice,FreshBoxPrice2, children }) => {
  return (
    <Link to={FreshLink} target="_blank" id="FreshBox">
      <div className="FreshBox-lt">
        <img src={FreshBoxltImg} alt="FreshBoxltImg" />
        <Link to='#'>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </Link>
      </div>
      <div className="FreshBox-rt">
        <div>
          <h3>{FreshBoxRtTow}</h3>
          <div className="FreshBox-rt_t">
            <p>
              <span>{FreshBoxRtTBrand}</span>
              {FreshBoxRtTNaming}
            </p>
          </div>
        </div>
        <div className="FreshBox-rt_bt">
          <span>
            <h2>{FreshBoxPrice}</h2> {FreshBoxPrice2}
          </span>
        </div>
        {children}
      </div>
    </Link>
  );
};

export default FreshBox;
