import * as S from "./Footer.Styles";

//components
import Logo from "../Logo";
import Title from "../Title";
import Text from "../Text";
import Cart from "../Cart";

const Footer = () => (
  <S.Wrapper>
    <figure></figure>
    <div>
      <S.Link href="">Políticas de Privacidade</S.Link>
    </div>
    <div>
      <S.Link href="">Termos de Uso</S.Link>
    </div>
    <div>
      <S.Link>Nossas redes sociais</S.Link>
      <div>
        <S.Link href="">
          <S.IconTwitter />
        </S.Link>
        <S.Link  href="">
          <S.IconYt />
        </S.Link>
        <S.Link  href=""></S.Link>
      </div>
    </div>
  </S.Wrapper>
);

export default Footer;
