import * as S from "./Footer.Styles";
import Image from "next/image";

import Link from "../Link";
import Text from "../Text";

const Footer = () => (
  <S.Wrapper>
    <div>
      <Text color="person" text="Políticas de Privacidade" />
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
      <Text color="person" text="Nossas redes sociais" />
      <S.BoxSocial>
        <S.IconFb />
        <S.IconInsta />
        <S.IconTwitter />
        <S.IconYt />
      </S.BoxSocial>
    </div>
  </S.Wrapper>
);

export default Footer;
