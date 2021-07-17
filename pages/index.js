import * as S from './styles/home';

//components
import Header from "../components/Header";
import Container from "../components/Container";
import BoxProduct from "../components/BoxProduct";
import Category from "../components/Category";

const PageLojinha = () => {
  const view = () => alert("ok");

  return (
    <>
      <S.Background/>
      <Header /> 
      <Container>
        <Category title="Sugestão do Vendedor">
          <BoxProduct
            view={view}
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
          <BoxProduct
          view={view}
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
          <BoxProduct
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
          <BoxProduct
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
          <BoxProduct
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
          <BoxProduct
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />{" "}
          <BoxProduct
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
        </Category>

        <Category title="Brinquedo">
          <BoxProduct
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
          <BoxProduct
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
          <BoxProduct
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
          <BoxProduct
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
          <BoxProduct
            productName="Shampoo Tradicional I Love Pet 5 Litros"
            price={69.9}
          />
        </Category>
      </Container>
      </>
  );
};

export default PageLojinha;
