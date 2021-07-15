import * as S from "./Header.Styles";

import Logo from "../Logo";
import Title from "../Title";
import Text from "../Text";

const Header = () => (
  <S.Wrapper>
    <S.Main>
      <figure style={{ marginRight: "1.5rem" }}>
        <Logo />
      </figure>

      <div>
        <S.Box>
          <Title text="Pet Friends Acessories" size="big" />
          <S.Box> <S.IconTime /> <Text text="ABERTO AGORA" size="" /> </S.Box>
        </S.Box>

        <S.Box>
          <Text
            text="Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB"
            size="small"
          />
        </S.Box>

        <S.Box>
          <S.Box>
            <S.IconDelivery /> <Text text="Delivery:" size="small" bold /> 
            <Text text="35m - 1h:40m" size="minimum" />
          </S.Box>

          <S.Box>
            <Text text="Entrega:" size="small" bold />
            <Text text="À partir de R$ 3,00" size="minimum" />
          </S.Box>
        </S.Box>
      </div>
    </S.Main>

    
    
  
  </S.Wrapper>
);

export default Header;
