import Box from "./Box";
import "./Container.scss";

import g_fresh_sw1 from "../assets/g_fresh_sw1.png";
import g_fresh_sw2 from "../assets/g_fresh_sw2.jpg";
import { g_smail_sw1, g_smail_sw2 } from "./Image";

const Container = () => {
  const images1 = [g_fresh_sw1, g_fresh_sw2];
  const images2 = [g_smail_sw1, g_smail_sw2];
  
  // 첫 번째 Box에 필요한 탭 메뉴와 링크, 텍스트
  const tabs1 = [
    { name: "하나더", link: "https://www.gmarket.co.kr/n/smilefresh/sale?promotionCode=1", text: "하나더 상품 더보기" },
    { name: "전단상품", link: "https://www.gmarket.co.kr/n/smilefresh/sale?promotionCode=2", text: "전단 상품 더보기" },
    { name: "오반장", link: "https://www.gmarket.co.kr/n/smilefresh/sale?promotionCode=3", text: "오반장 상품 더보기" }
  ];

  // 두 번째 Box에 필요한 탭 메뉴와 링크, 텍스트
  const tabs2 = [
    { name: "베스트", link: "https://www.gmarket.co.kr/n/smiledelivery/search?keyword=%EB%B2%A0%EC%8A%A4%ED%8A%B8", text: "베스트 상품 더보기" },
    { name: "무료배송", link: "https://www.gmarket.co.kr/n/smiledelivery/search?keyword=%EB%AC%B4%EB%A3%8C%EB%B0%B0%EC%86%A1", text: "무료배송 상품 더보기" }
  ];

  return (
    <div id="Container">
      {/* 첫 번째 Box에 3개의 탭 메뉴 전달 */}
      <Box boxSe1Title="지금부터의 신선마켓, 스마일프레시" images={images1} tabs={tabs1} />

      {/* 두 번째 Box에 2개의 탭 메뉴 전달 */}
      <Box boxSe1Title="오늘 주문 내일 도착, 스마일배송" images={images2} tabs={tabs2} />
    </div>
  );
};

export default Container;