import * as S from "./Text.Styles";

const Text = ({ text, size }) => (
  <S.Text size={size}>{text}</S.Text>
);

export default Text;
