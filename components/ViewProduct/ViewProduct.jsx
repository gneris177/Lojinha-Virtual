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
}) => {
  return (
    <S.Wrapper>
      <S.HeaderMobile>
        <a onClick={close} href={`#${idProduct}`}>
          <S.IconLeft />
        </a>
      </S.HeaderMobile>

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

        <div>
          <Text text={productName} color="person" bold={500} size="big" />
        </div>

        <div>
          <Text text={desc} bold={500} />
        </div>

        <div>
          <Text text="Observações:" bold={500} color="person" />
          <S.TextArea />
        </div>

        <div>
          <Button
            text="Adicionar"
            textSecundary={`R$ ${price}`}
            fuctionClick={fuctionClick}
          />
        </div>
      </S.Box>
    </S.Wrapper>
  );
};

export default Product;
