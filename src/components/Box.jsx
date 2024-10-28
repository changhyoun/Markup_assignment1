// Box.jsx
import { useState } from "react";
import "./Box.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import FreshBox_warp from "./FreshBox_warp";
import DeliveryBox_warp from "./DeliveryBox_warp";
import FreeBox_warp from "./FreeBox_warp";
import ShearBox_warp from "./ShearBox_warp";
import ObanjangBox_warp from "./ObanjangBox_warp";

const Box = ({ boxSe1Title, images, tabs }) => {
  // 현재 선택된 탭을 관리하는 상태
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // '베스트' 탭에만 클래스적용
  const hasBestTab = tabs.some(tab => tab.name === "베스트");

  return (
    <div id="Box" className="Box">
      <div className="box-se1">
        <h2>{boxSe1Title}</h2>
        <Link to="/" className="box-se1__rt">
          <p>바로가기</p>
          <span className="material-symbols-outlined green_arrow">arrow_forward</span>
        </Link>
      </div>

      <div className="box-se2">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}

          <div className={`swiper-button-prev`}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <div className={`swiper-button-next`}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </Swiper>
      </div>

      <div className="box-se3">
        {/* '베스트'가 포함된 경우, 클래스 추가 */}
        <div className={`box-se3__t ${hasBestTab ? "has-best-tab" : ""}`}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab.name === tab.name ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* 탭 메뉴에 따른 콘텐츠 표시 */}
        <div className="box-se3__ce">
          {activeTab.name === "하나더" && <FreshBox_warp />}
          {activeTab.name === "전단상품" && <ShearBox_warp />}
          {activeTab.name === "오반장" && <ObanjangBox_warp/>}
          {activeTab.name === "무료배송" && <FreeBox_warp />}
          {activeTab.name === "베스트" && <DeliveryBox_warp />}
        </div>

        {/* 각 탭의 링크와 텍스트가 탭에 따라 변경 */}
        <Link to={activeTab.link} className="box-se3__bt">
          <p>{activeTab.text}</p>
          <span className="material-symbols-outlined green_arrow">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
};

export default Box;
