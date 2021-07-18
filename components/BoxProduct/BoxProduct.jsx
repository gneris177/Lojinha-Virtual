import React, { useState } from "react";
import * as S from "./BoxProduct.Styles";
import Image from "next/image";
import Text from "../Text";


const Product = ({ price, productName, imgUrl, click, id }) => {
  
  return (
    <S.Wrapper onClick={click} id={id}>
      <S.Box>
        <div>
          <S.Off />
          <figure>
            <Image src={imgUrl} width={224} height={224} />
          </figure>
        </div>
        <Text text={productName} />
      </S.Box>

      <S.Box flex>
        <S.Price>R$ {price.toFixed(2)}</S.Price>
        <S.IconCart />
      </S.Box>
    </S.Wrapper>
  );
};

export default Product;
