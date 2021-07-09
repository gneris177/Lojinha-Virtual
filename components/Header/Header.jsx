import * as S from "./Header.Styles";

import Logo from "../Logo";
import Title from "../Title";
import Text from "../Text";

const Header = () => (
  <S.Wrapper>
    <S.BoxMain>
      <figure style={{ marginRight: "1.5rem" }}>
        <Logo />
      </figure>

      <div>
        <S.Box>
          <Title text="Pet Friends Acessories" size="big" />
          <S.Box>
            <S.IconTime />
            <Text text="ABERTO AGORA" size="" />
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
            <S.IconDelivery /> <Text text="Delivery:" size="small" bold />{" "}
            <Text text="35m - 1h:40m" size="small" />
          </S.Box>
          <S.Box>
            <Text text="Entrega:" size="small" bold />
            <Text text="À partir de R$ 3,00" size="small" />
          </S.Box>
        </S.Box>
      </div>
    </S.BoxMain>

    <div>
      <S.Box>
        <S.IconCart /> <Text text="5 Produtos no Carrinho" size="small" bold />
      </S.Box>
      <Text text="R$ 349,80" />
    </div>
  </S.Wrapper>
);

export default Header;
