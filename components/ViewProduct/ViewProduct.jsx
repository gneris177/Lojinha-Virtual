import react, { useState } from "react";
import * as S from "./ViewProduct.Styles";

//components
import Image from "next/image";
import Text from "../Text";
import Button from "../Button";
import Off from "../Off";

const Product = ({
  price,
  off,
  productName,
  desc,
  imgUrl,
  idProduct,
  close,
  fuctionClick,
  quantity,
  moreQuantity,
  lessQuantity,
}) => {
  return (
    <S.Wrapper>
      <S.BoxImg>
        <Off off={off} />
        <figure>
          <Image src={imgUrl || "/img/logo.png"} width={290} height={290} />
        </figure>
      </S.BoxImg>

      <S.Box>
        <a href={`#${idProduct}`} onClick={close}>
          <S.IconClose />
        </a>

        <S.Box>
          <Text text={productName} color="person" bold={500} size="big" />
        </S.Box>

        <S.Box margin>
          <Text text={desc} bold={500} />
        </S.Box>

        <S.Box margin>
          <Text text="Observações:" bold={500} color="person" />
          <S.TextArea />
        </S.Box>

        <S.Box row margin>
          <S.Quantity row>
            <S.Btn disabled={quantity == 1} onClick={lessQuantity}>
              -
            </S.Btn>
            <Text text={quantity} bold={500} />
            <S.Btn onClick={moreQuantity}>+</S.Btn>
          </S.Quantity>
          <Button
            text="Adicionar"
            textSecundary={`R$ ${price}`}
            fuctionClick={fuctionClick}
          />
        </S.Box>
      </S.Box>
    </S.Wrapper>
  );
};

export default Product;
