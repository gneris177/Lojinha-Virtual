import * as S from "./BoxProduct.Styles";

//components
import Image from "next/image";
import Text from "../Text";
import Off from "../Off";

const Product = ({
  price,
  priceDiscount,
  productName,
  off,
  imgUrl,
  click,
  id,
}) => {
  return (
    <S.Wrapper onClick={click} id={id}>
      <S.Box>
        <Off off={off} />
        <S.BoxImg>
          <Image src={imgUrl} width={224} height={224} />
        </S.BoxImg>
        <br />
        <Text bold={500} text={productName} />
      </S.Box>

      {priceDiscount >= 1 ? (
        <S.Box>
          <S.Box flex start>
            <Text text="De " bold={500} color="cinze" size="minimum" />
            <Text text={`R$ ${price}`} color="red" bold={500} size="small" />
          </S.Box>
          <S.Box flex>
            <S.Box flex>
              <Text text="Por " bold={500} color="cinze" size="minimum" />
              <Text bold={700} text={`R$ ${priceDiscount.toFixed(2)}`} />
            </S.Box>
            <S.IconCart />
          </S.Box>
        </S.Box>
      ) : (
        <S.Box flex>
          <Text bold={700} text={`R$ ${price.toFixed(2)}`} />
          <S.IconCart />
        </S.Box>
      )}
    </S.Wrapper>
  );
};

export default Product;
