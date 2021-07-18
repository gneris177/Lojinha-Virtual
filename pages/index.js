import React, { useState, useEffect } from "react";
import * as S from "./styles/home";

//components
import Header from "../components/Header";
import Container from "../components/Container";
import BoxProduct from "../components/BoxProduct";
import Category from "../components/Category";
import Background from "..//components/BackgroundProduct";
import ViewProduct from "../components/ViewProduct";
import Footer from "../components/Footer";

const PageLojinha = () => {
  const [bgProduct, setBgProduct] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://lojinha-virtual-api.herokuapp.com/products").then(
      async (response) => setProduct(await response.json())
    );
  }, []);

  return (
    <>
      <Background active={bgProduct} />
      <ViewProduct active={bgProduct} />
      <Header />
      <Container>
        <Category  title="Sugestão do Vendedor">
          {product.map((pdct) => {
            if (pdct.category === "Sugestão do Vendedor")
            return(
              <BoxProduct
                click={() => setBgProduct(true)}
                imgUrl={pdct.imgUrl}
                productName={pdct.name}
                price={pdct.price}
              />)
          })}
        </Category>

        <Category title="Brinquedos">
        {product.map((pdct) => {
            if (pdct.category === "Brinquedos")
            return(
              <BoxProduct
                click={() => setBgProduct(true)}
                imgUrl={pdct.imgUrl}
                productName={pdct.name}
                price={pdct.price}
              />)
          })}
        </Category>

        <Category title="Raçoes">
        {product.map((pdct) => {
            if (pdct.category === "Rações")
            return(
              <BoxProduct
                click={() => setBgProduct(true)}
                imgUrl={pdct.imgUrl}
                productName={pdct.name}
                price={pdct.price}
              />)
          })}
        </Category>
      </Container>
      <Footer />
    </>
  );
};

export default PageLojinha;
