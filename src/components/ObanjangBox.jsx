import "./ObanjangBox.scss";
import { Link } from "react-router-dom";

const ObanjangBox = ({ObanjangBoxLink, ObanjangBoxltImg, ObanjangBoxRtTow, ObanjangBoxRtTBrand, ObanjangBoxRtTNaming, ObanjangBoxPrice,ObanjangBoxPrice2 }) => {
  return (
    <Link to={ObanjangBoxLink} target="_blank" id="ObanjangBox">
      <div className="ObanjangBox-lt">
        <img src={ObanjangBoxltImg} alt="ObanjangBoxltImg" />
        <Link to='#'>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </Link>
      </div>
      <div className="ObanjangBox-rt">
        <div>
          <h3>{ObanjangBoxRtTow}</h3>
          <div className="ObanjangBox-rt_t">
            <p>
              <span>{ObanjangBoxRtTBrand}</span>
              {ObanjangBoxRtTNaming}
            </p>
          </div>
        </div>
        <div className="ObanjangBox-rt_bt">
          <span>
            <h2>{ObanjangBoxPrice}</h2> {ObanjangBoxPrice2}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ObanjangBox;
