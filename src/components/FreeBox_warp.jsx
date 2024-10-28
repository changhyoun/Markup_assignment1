import FreeBox from "./FreeBox"
import "./FreeBox_warp.scss"
import { g_free_product1,g_free_product2,g_free_product3,g_free_product4,g_free_product5,g_free_product6} from "./Image"

const FreeBox_warp = () => {
  return (
    <div id="FreeBox_warp">
      <FreeBox FreeBoxLink={'https://github.com/changhyoun'} FreeBoxltImg={g_free_product1} FreeBoxRtTow={'무료 배송'} FreeBoxRtTBrand={'파파네 삼겹살'} FreeBoxRtTNaming={'파파네 삼겹살 2kg 구이용 돼지고기 냉동삼겹살 냉삼 무료배송 (1kg x 2팩)'} FreeBoxPrice={'21,600'}  FreeBoxPrice2={'원'}/>
      <FreeBox FreeBoxLink={'https://github.com/changhyoun'} FreeBoxltImg={g_free_product2} FreeBoxRtTow={'무료 배송'} FreeBoxRtTBrand={'벡셀'} FreeBoxRtTNaming={'알카라인 건전지 AA 20알 + AAA 20알 -최신제조상품/무료배송'} FreeBoxPrice={'15,840'} FreeBoxPrice2={'원'}/>
      <FreeBox FreeBoxLink={'https://github.com/changhyoun'} FreeBoxltImg={g_free_product3} FreeBoxRtTow={'무료 배송'} FreeBoxRtTBrand={'3M'} FreeBoxRtTNaming={'3M장갑 슈퍼그립200 코팅장갑 10개입 무료배송'} FreeBoxPrice={'23,310'}  FreeBoxPrice2={'원'}/>
      <FreeBox FreeBoxLink={'https://github.com/changhyoun'} FreeBoxltImg={g_free_product4} FreeBoxRtTow={'무료 배송'} FreeBoxRtTBrand={'모데라토'} FreeBoxRtTNaming={'모데라토 엠보 캡형X10팩 80매 아기물티슈 무료배송'} FreeBoxPrice={'9,900'} FreeBoxPrice2={'원'}/>
      <FreeBox FreeBoxLink={'https://github.com/changhyoun'} FreeBoxltImg={g_free_product5} FreeBoxRtTow={'무료 배송'} FreeBoxRtTBrand={''} FreeBoxRtTNaming={'가성비 1위 갈비살 200g x 5팩 (총1kg) 무료배송 특가'} FreeBoxPrice={'24,660'} FreeBoxPrice2={'원'}/>
      <FreeBox FreeBoxLink={'https://github.com/changhyoun'} FreeBoxltImg={g_free_product6} FreeBoxRtTow={'무료 배송'} FreeBoxRtTBrand={''} FreeBoxRtTNaming={'벽돌삼겹살 1kg 바삭쫄깃 육즙 폭발 두툼 무료배송 특가'} FreeBoxPrice={'14,760'}  FreeBoxPrice2={'원'}/>
    </div>
  )
}

export default FreeBox_warp