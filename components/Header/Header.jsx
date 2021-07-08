import * as S from "./Header.Styles";

import Logo from "../Logo";
import Title from "../Title";
import Text from "../Text";

const Header = () => (
  <S.Wrapper>
    <S.Box>
      <figure>
        <Logo />
      </figure>

      <S.BoxPet>
        <S.Box>
          <Title text="Pet Friends Acessories" size="big" />
          <S.Box>
            <S.IconTime />
            <Text text="ABERTO AGORA" size="minimum" />
          </S.Box>
        </S.Box>

        <S.Box>
          <Text
            text="Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB"
            size="small"
          />
        </S.Box>
        <S.Box>
          <S.Box>
            <Text text="Delivery:" /> <Text text="35m - 1h:40m" />
          </S.Box>
          <S.Box>
            <Text text="Delivery:" /> <Text text="35m - 1h:40m" />
          </S.Box>
        </S.Box>
      </S.BoxPet>
    </S.Box>

    <S.Box>
      <S.IconCart /> <Text text="5 Produtos no Carrinho" />
      <Text text="R$ 349,80" />
    </S.Box>
  </S.Wrapper>
);

export default Header;
