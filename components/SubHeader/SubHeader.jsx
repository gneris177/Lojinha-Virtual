import * as S from "./SubHeader.Styles";
import Image from "next/image";

import Link from "../Link";
import Search from "../Search";

const SubHeader = () => (
  <S.Wrapper>
    <S.BoxSearch><Search placeholder="O que você procura?" responsive /></S.BoxSearch>
    <S.List>
    <S.Items><Link text="Sugestão do Vendedor" /></S.Items>
    <S.Items><Link text="Brinquedos" LinkBlack /></S.Items>
    <S.Items><Link text="Camas e Casinhas" LinkBlack/></S.Items>
    <S.Items><Link text="Coleiras" LinkBlack /></S.Items>
    <S.Items><Link text="Saúde" LinkBlack /></S.Items>
    </S.List>
  </S.Wrapper>
);

export default SubHeader;
