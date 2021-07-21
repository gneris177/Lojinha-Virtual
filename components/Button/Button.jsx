import * as S from "./Button.Styles";

import Text from "../Text";

const Cart = ({ text, textSecundary, fuctionClick }) => (
  <S.Button onClick={fuctionClick}>
    <Text bold={500} text={text} />
    <Text bold={500} text={textSecundary} />
  </S.Button>
);

export default Cart;
