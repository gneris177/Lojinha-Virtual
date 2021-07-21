import * as S from "./Text.Styles";

const Text = ({ text, size, bold, color }) => (
  <S.Text size={size} bold={bold} color={color}>
    {text}
  </S.Text>
);

export default Text;
