import React, { useEffect, useState } from "react";
import * as S from "./Background.Styles";

import HeaderMobile from "../HeaderProdctMobi";

const Background = ({ active, children, idProduct, close }) => {
  const [height, setHeight] = useState({});

  useEffect(() => {
    setHeight(document.body.clientHeight);
  }, []);

  return (
    <S.Background id="product" active={active} height={height}>
      <HeaderMobile />
      {children}
    </S.Background>
  );
};
export default Background;
