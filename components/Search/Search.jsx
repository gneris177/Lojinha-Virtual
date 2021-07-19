import * as S from "./Search.Styles";

const Search = ({ text, type = "text", placeholder, responsive }) => (
  <S.Wrapper responsive={responsive}>
    <S.Input type={type} placeholder={placeholder} responsive={responsive} />
    <S.IconSearch />
  </S.Wrapper>
);

export default Search;
