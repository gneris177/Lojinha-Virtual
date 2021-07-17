import * as S from "./Category.Styles";

const Category = ({ title, children }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Box>{children}</S.Box>
  </S.Wrapper>
);

export default Category;
