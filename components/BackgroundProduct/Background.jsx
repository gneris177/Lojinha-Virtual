import React, { useEffect, useState } from "react";
import * as S from "./Background.Styles";

const Background = ({ color, active, children }) => {
  const [height, setHeight] = useState({});

  useEffect(() => {
    setHeight(screen.height);
  }, []);

  return (
    <S.Background id="product" active={active}>
      {children}
    </S.Background>
  );
};
export default Background;
