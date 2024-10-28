import FreshBox from "./FreshBox"
import "./FreshBox_warp.scss"
import { g_fresh_product1,g_fresh_product2,g_fresh_product3 ,g_fresh_product4,g_fresh_product5,g_fresh_product6} from "./Image"

const FreshBox_warp = () => {
  return (
    <div id="FreshBox_warp">
      <FreshBox FreshBoxltImg={g_fresh_product1} FreshBoxRtTow={'2개 사면 할인'} FreshBoxRtTBrand={'크리넥스'} FreshBoxRtTNaming={'크리넥스 3겹 순수소프트 내추럴 30팩 증정 추가'}>
      <p className="FreshBox_add_info1">
        쿠폰적용가 <span style={{ textDecoration: "line-through" }}>291,200원</span>
      </p>
      <h4 className="FreshBox_add_info2">75% 69,890원</h4>
       </FreshBox>
      <FreshBox FreshLink={'https://github.com/changhyoun'} FreshBoxltImg={g_fresh_product2} FreshBoxRtTow={'2개 사면 할인'} FreshBoxRtTBrand={'백설'} FreshBoxRtTNaming={'CJ 다담 순두부 찌개 양념 140g'} FreshBoxPrice={'2380'} FreshBoxPrice2={'원'}/>
      <FreshBox FreshLink={'https://github.com/changhyoun'} FreshBoxltImg={g_fresh_product3} FreshBoxRtTow={'2개 사면 할인'} FreshBoxRtTBrand={'백설'} FreshBoxRtTNaming={'다담 된짱찌개 양념 500g'} FreshBoxPrice={'6980'}  FreshBoxPrice2={'원'}/>
      <FreshBox FreshLink={'https://github.com/changhyoun'} FreshBoxltImg={g_fresh_product4} FreshBoxRtTow={'2개 사면 할인'} FreshBoxRtTBrand={'비비고'} FreshBoxRtTNaming={'CJ 비비고 소고기듬뿍 설렁탕 460g'} FreshBoxPrice={'6980'}  FreshBoxPrice2={'원'}/>
      <FreshBox FreshLink={'https://github.com/changhyoun'} FreshBoxltImg={g_fresh_product5} FreshBoxRtTow={'2개 사면 할인'} FreshBoxRtTBrand={'차오차이'} FreshBoxRtTNaming={'차오차이 130직화간짜장 180g'} FreshBoxPrice={'3980'}  FreshBoxPrice2={'원'}/>
      <FreshBox FreshLink={'https://github.com/changhyoun'} FreshBoxltImg={g_fresh_product6} FreshBoxRtTow={'2개 사면 할인'} FreshBoxRtTBrand={'비비고'} FreshBoxRtTNaming={'비비고 물만두'} FreshBoxPrice={'6980'}  FreshBoxPrice2={'원'}/>

    </div>
  )
}

export default FreshBox_warp