import * as S from "./ViewProduct.Styles";
import Image from "next/image";
import Text from "../Text";

const Product = ({ price, productName, imgUrl, active, idProduct, close }) => {
  return (
    <S.Wrapper active={active}>
      <S.Box>
        <div>
          <S.Off />
          <figure>
            <Image src={imgUrl || "/img/logo.png"} width={224} height={224} />
          </figure>
        </div>
        <Text text={productName} />
      </S.Box>

      <S.Box flex>
        <S.Price>R$ {price}</S.Price>
        <S.IconCart />
      </S.Box>
      <a href={`#${idProduct}`} onClick={() => close()}>
        <S.IconClose />
      </a>
    </S.Wrapper>
  );
};

export default Product;
