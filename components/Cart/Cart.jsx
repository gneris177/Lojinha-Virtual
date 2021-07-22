import * as S from "./Cart.Styles";

import Text from "../Text";

const Cart = ({ valueTotal = 0, products = [], header, responsive }) => (
  <>
    {header && (
      <S.Wrapper>
        <S.Box>
          <S.IconCart color="#3f3f3f" />
          <Text bold={500} text={`  ${products.length} Produtos no Carrinho`} />
        </S.Box>
        <S.Box margin={true}>
          <Text color="person" bold={700} text={`R$ ${valueTotal}`} />
        </S.Box>
      </S.Wrapper>
    )}

    {responsive && (
      <S.WrapperResponsive>
        <S.Box>
          <S.IconCart color="#fff" />
          <Text
            bold={700}
            size="bigger"
            text={`  ${products.length} Produtos no Carrinho`}
          />
        </S.Box>
        <S.BoxRadiusPrice>
          <Text bold={700} color="person" text={`R$ ${valueTotal.toFixed(2)}`} />
        </S.BoxRadiusPrice>
      </S.WrapperResponsive>
    )}
  </>
);

export default Cart;
