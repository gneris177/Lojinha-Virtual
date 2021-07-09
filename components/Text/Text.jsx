import * as S from "./Text.Styles";

const Text = ({ text, size, bold }) => (
  <S.Text size={size} bold={bold}>
    {text}
  </S.Text>
);

export default Text;
