import ObanjangBox from "./ObanjangBox"
import "./ObanjangBox_warp.scss"
import {g_obanjang_product1,g_obanjang_product2,g_obanjang_product3,g_obanjang_product4,g_obanjang_product5,g_obanjang_product6 } from "./Image"

const ObanjangBox_warp = () => {
  return (
    <div id="ObanjangBox_warp">
      <ObanjangBox ObanjangBoxLink={'https://github.com/changhyoun'} ObanjangBoxltImg={g_obanjang_product1} ObanjangBoxRtTow={'오반장'} ObanjangBoxRtTBrand={'삼광'} ObanjangBoxRtTNaming={'강화섬쌀 삼광 10kg'} ObanjangBoxPrice={'25,110'} ObanjangBoxPrice2={'원'}/>
      <ObanjangBox ObanjangBoxLink={'https://github.com/changhyoun'} ObanjangBoxltImg={g_obanjang_product2} ObanjangBoxRtTow={'오반장'} ObanjangBoxRtTBrand={'농심'} ObanjangBoxRtTNaming={'농심 신라면 5입 600g (120gx5입)'} ObanjangBoxPrice={'6980'}  ObanjangBoxPrice2={'원'}/>
      <ObanjangBox ObanjangBoxLink={'https://github.com/changhyoun'} ObanjangBoxltImg={g_obanjang_product3} ObanjangBoxRtTow={'오반장'} ObanjangBoxRtTBrand={'비비고'} ObanjangBoxRtTNaming={'비비고 왕교자1.12kg'} ObanjangBoxPrice={'SOLD OUT'} ObanjangBoxPrice2={''}/>
      <ObanjangBox ObanjangBoxLink={'https://github.com/changhyoun'} ObanjangBoxltImg={g_obanjang_product4} ObanjangBoxRtTow={'오반장'} ObanjangBoxRtTBrand={'피코크'} ObanjangBoxRtTNaming={'피코크 에이클래스 시그니처 그릭요거트 450g'} ObanjangBoxPrice={'4,980'}  ObanjangBoxPrice2={'원'}/>
      <ObanjangBox ObanjangBoxLink={'https://github.com/changhyoun'} ObanjangBoxltImg={g_obanjang_product5} ObanjangBoxRtTow={'오반장'} ObanjangBoxRtTBrand={'켈로그'} ObanjangBoxRtTNaming={'켈로그 콘푸로스트 600g'} ObanjangBoxPrice={'4,980'}  ObanjangBoxPrice2={'원'}/>
      <ObanjangBox ObanjangBoxLink={'https://github.com/changhyoun'} ObanjangBoxltImg={g_obanjang_product6} ObanjangBoxRtTow={'오반장'} ObanjangBoxRtTBrand={'코디'} ObanjangBoxRtTNaming={'코디 키친타올 150매6롤'} ObanjangBoxPrice={'4,900'}  ObanjangBoxPrice2={'원'}/>
    </div>
  )
}

export default ObanjangBox_warp

