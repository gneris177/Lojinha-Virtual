import * as S from "./Container.Styles";

const Container = ({ backgroundColor, children }) => (
  <S.Wrapper>{children}</S.Wrapper>
);

export default Container;
