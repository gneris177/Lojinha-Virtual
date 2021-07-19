import * as S from "./Header.Styles";

//components
import Logo from "../Logo";
import Title from "../Title";
import Text from "../Text";
import Cart from "../Cart";

const Header = () => (
  <S.Wrapper>
    <S.Main>
      <figure style={{margin: 'auto'}}>
        <Logo />
      </figure>

      <S.divq>
        <S.Box>
          <S.BoxTitle>
            <Title text="Pet Friends Acessories" size="big" />
          </S.BoxTitle>
          <S.Box>
            <S.IconTime /> <Text text="ABERTO AGORA" size="minimum" />
          </S.Box>
        </S.Box>

        <S.Box>
          <Text text="Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB" />
        </S.Box>

        <S.Box>
          <S.BoxSecudary>
            <S.Box>
              <S.IconDelivery /> <Text text="Delivery:" bold />
            </S.Box>
            <Text text="35m - 1h:40m" />
          </S.BoxSecudary>

          <S.BoxSecudary>
            <Text text="Entrega:" bold />
            <Text text="À partir de R$ 3,00" />
          </S.BoxSecudary>
        </S.Box>
      </S.divq>
    </S.Main>

    <S.BoxCart>
      <Cart />
    </S.BoxCart>
  </S.Wrapper>
);

export default Header;
