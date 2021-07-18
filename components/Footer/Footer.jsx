import * as S from "./Footer.Styles";
import Image from "next/image";

const Footer = () => (
  <S.Wrapper>
    <div>
      <S.Link href="">Políticas de Privacidade</S.Link>
      <figure>
        <Image src="/img/softcom-logo.png" width={190} height={50} />
      </figure>
    </div>

    <div>
      <S.Link href="">Políticas de Privacidade</S.Link>
    </div>

    <div>
      <S.Link href="">Termos de Uso</S.Link>
    </div>

    <div>
      <S.Link>Nossas redes sociais</S.Link>
      <div>
        <S.Link href=""><S.IconFb /></S.Link>
        <S.Link href=""><S.IconInsta /></S.Link>
        <S.Link href=""><S.IconTwitter /></S.Link>
        <S.Link href=""><S.IconYt /></S.Link>
      </div>
    </div>
  </S.Wrapper>
);

export default Footer;
