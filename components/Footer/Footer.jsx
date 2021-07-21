import * as S from "./Footer.Styles";
import Image from "next/image";

import Link from "../Link";

const Footer = () => (
  <S.Wrapper>
    <div>
      <Link text="Políticas de Privacidade" href="" />
      <figure>
        <Image src="/img/softcom-logo.png" width={190} height={50} />
      </figure>
    </div>

    <div>
      <Link href="" text="Políticas de Privacidade" />
    </div>

    <div>
      <Link href="" text="Termos de Uso" />
    </div>

    <div>
      <Link text="Nossas redes sociais" />
      <div>
        <S.IconFb />
        <S.IconInsta />
        <S.IconTwitter />
        <S.IconYt />
      </div>
    </div>
  </S.Wrapper>
);

export default Footer;
