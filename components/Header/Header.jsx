import * as S from "./Header.Styles";

//components
import Logo from "../Logo";
import Title from "../Title";
import Text from "../Text";
import Cart from "../Cart";

const Header = ({ cartProducts, valueTotal }) => (
  <S.Wrapper>
    <S.Main>
      <figure style={{ margin: "auto" }}>
        <Logo />
      </figure>

      <S.divq>
        <S.Box>
          <S.Box>
            <Title text="Pet Friends Acessories" size="big" />
          </S.Box>

          <S.Box>
            <S.IconTime />
            <Text text="ABERTO AGORA" size="minimum" color="green" bold={700} />
          </S.Box>
        </S.Box>

        <S.Box>
          <Text text="Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB" />
        </S.Box>

        <S.Box>
          <S.BoxSecudary>
            <S.Box>
              <S.IconDelivery /> <Text text={` Delivery:   `} bold={500} />
            </S.Box>
            <Text text="35m - 1h:40m" color="cinze" />
          </S.BoxSecudary>
          <S.BoxSecudary>
            <Text text={`Entrega:   `} bold={500} />
            <Text text="À partir de R$ 3,00" color="cinze" />
          </S.BoxSecudary>
        </S.Box>
      </S.divq>
    </S.Main>

    <S.BoxCart>
      <Cart header products={cartProducts} valueTotal={valueTotal.toFixed(2)} />
    </S.BoxCart>
  </S.Wrapper>
);

export default Header;
