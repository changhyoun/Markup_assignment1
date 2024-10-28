import DeliveryBox from "./DeliveryBox"
import "./DeliveryBox_warp.scss"
import { g_delevery_product1,g_delevery_product2,g_delevery_product3,g_delevery_product4,g_delevery_product5,g_delevery_product6} from "./Image"

const DeliveryBox_warp = () => {
  return (
    <div id="DeliveryBox_warp">
      <DeliveryBox DeliveryLink={'https://github.com/changhyoun'} DeliveryltImg={g_delevery_product1} DeliveryBoxRtTow={'1'} DeliveryBoxRtTBrand={''} DeliveryBoxRtTNaming={'신라면 10입 + 안성타면 5입 + 너구리 5입 + 짜파게티 10입'} DeliveryBoxPrice={'26,710'} DeliveryBoxPrice2={'원'}/>
      <DeliveryBox DeliveryLink={'https://github.com/changhyoun'} DeliveryltImg={g_delevery_product2} DeliveryBoxRtTow={'2'} DeliveryBoxRtTBrand={'농심'} DeliveryBoxRtTNaming={'새우깡 8봉 + 매운새우깡 8봉'} DeliveryBoxPrice={'20,500'} DeliveryBoxPrice2={'원'}/>
      <DeliveryBox DeliveryLink={'https://github.com/changhyoun'} DeliveryltImg={g_delevery_product3} DeliveryBoxRtTow={'3'} DeliveryBoxRtTBrand={'농심'} DeliveryBoxRtTNaming={'신라면 + 튀김우동 + 새우탕 + 오짬뽕 6입 4개 ( 총 24개 )'} DeliveryBoxPrice={'25,200'}  DeliveryBoxPrice2={'원'}/>
      <DeliveryBox DeliveryLink={'https://github.com/changhyoun'} DeliveryltImg={g_delevery_product4} DeliveryBoxRtTow={'4'} DeliveryBoxRtTBrand={'일리윤'} DeliveryBoxRtTNaming={'일리윤 세라마이드 아토로션 528ml 2개 + 증정품'} DeliveryBoxPrice={'43,000'}  DeliveryBoxPrice2={'원'}/>
      <DeliveryBox DeliveryLink={'https://github.com/changhyoun'} DeliveryltImg={g_delevery_product5} DeliveryBoxRtTow={'5'} DeliveryBoxRtTBrand={'농심'} DeliveryBoxRtTNaming={'신라면 5봉 + 너구리 5봉 + 짜파게티 5봉 + 오징어 5봉'} DeliveryBoxPrice={'22,200'}  DeliveryBoxPrice2={'원'}/>
      <DeliveryBox DeliveryLink={'https://github.com/changhyoun'} DeliveryltImg={g_delevery_product6} DeliveryBoxRtTow={'6'} DeliveryBoxRtTBrand={'웰치스'} DeliveryBoxRtTNaming={'웰치스 제로 그레이프 + 체리스트로베리 + 샤인머스켓 + 오렌지'} DeliveryBoxPrice={'23,000'}  DeliveryBoxPrice2={'원'}/>
    </div>
  )
}

export default DeliveryBox_warp