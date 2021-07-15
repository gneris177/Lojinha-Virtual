import * as S from "./Cart.Styles";

const Cart = ({ value, products }) => (
  <S.Wrapper>
    <S.Box>
      <S.IconCart /> <S.Text>5 Produtos no Carrinho</S.Text>
    </S.Box>
    <S.Box>
      <S.Price> R$ 349,80</S.Price>
    </S.Box>
  </S.Wrapper>
);

export default Cart;
