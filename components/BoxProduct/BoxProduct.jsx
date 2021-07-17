import * as S from "./BoxProduct.Styles";
import Image from "next/image";
import Text from "../Text";

const Product = ({ price, productName , view}) => {

  return (
    <S.Wrapper onClick={view}>
      <S.Box>
        <div>
          <S.Off />
          <figure>
            <Image src="/img/image 10.png" width={224} height={224} />
          </figure>
        </div>
        <Text text={productName} />
      </S.Box>

      <S.Box flex>
        <S.Price>R$ {price}</S.Price>
        <S.IconCart />
      </S.Box>
    </S.Wrapper>
  );
};

export default Product;
