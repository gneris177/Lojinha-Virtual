import * as S from "./HeaderProdct.Styles";

const HeaderProdct = ({ idProduct, close }) => (
  <S.HeaderMobile>
    <a onClick={close} href={`#${idProduct}`}>
      <S.IconLeft />
    </a>
  </S.HeaderMobile>
);

export default HeaderProdct;
