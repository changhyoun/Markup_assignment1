import ShearBox from "./ShearBox"
import "./ShearBox_warp.scss"
import { g_shear_product1,g_shear_product2,g_shear_product3,g_shear_product4,g_shear_product5,g_shear_product6 } from "./Image"

const ShearBox_warp = () => {
  return (
    <div id="ShearBox_warp">
      <ShearBox ShearBoxLink={'https://github.com/changhyoun'} ShearBoxltImg={g_shear_product1} ShearBoxRtTow={'전단 상품'} ShearBoxRtTBrand={'태양초'} ShearBoxRtTNaming={'친정엄마태양초고춧가루1KG'} ShearBoxPrice={'20,690'} ShearBoxPrice2={'원'}/>
      <ShearBox ShearBoxLink={'https://github.com/changhyoun'} ShearBoxltImg={g_shear_product2} ShearBoxRtTow={'전단 상품'} ShearBoxRtTBrand={'이마트'} ShearBoxRtTNaming={'3980원 2980원 할인양파 (1.8kg)'} ShearBoxPrice={'2,980'}  ShearBoxPrice2={'원'}/>
      <ShearBox ShearBoxLink={'https://github.com/changhyoun'} ShearBoxltImg={g_shear_product3} ShearBoxRtTow={'전단 상품'} ShearBoxRtTBrand={'농심'} ShearBoxRtTNaming={'농심 육개장 사발면 (86gx6입)'} ShearBoxPrice={'4,680'} ShearBoxPrice2={'원'}/>
      <ShearBox ShearBoxLink={'https://github.com/changhyoun'} ShearBoxltImg={g_shear_product4} ShearBoxRtTow={'전단 상품'} ShearBoxRtTBrand={'생물국산'} ShearBoxRtTNaming={'생물국산 남해안 생굴 (250g/봉)'} ShearBoxPrice={'4,790'}  ShearBoxPrice2={'원'}/>
      <ShearBox ShearBoxLink={'https://github.com/changhyoun'} ShearBoxltImg={g_shear_product5} ShearBoxRtTow={'전단 상품'} ShearBoxRtTBrand={'네이블 오렌지'} ShearBoxRtTNaming={'호주산 네이블 오렌지 8~10입/봉 (2kg내외)'} ShearBoxPrice={'6,980'}  ShearBoxPrice2={'원'}/>
      <ShearBox ShearBoxLink={'https://github.com/changhyoun'} ShearBoxltImg={g_shear_product6} ShearBoxRtTow={'전단 상품'} ShearBoxRtTBrand={'다향'} ShearBoxRtTNaming={'다향 오리 구이용 (800g)'} ShearBoxPrice={'11,990'}  ShearBoxPrice2={'원'}/>
    </div>
  )
}

export default ShearBox_warp

