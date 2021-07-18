import React, { useState, useEffect } from "react";

//components
import Header from "../components/Header";
import Container from "../components/Container";
import BoxProduct from "../components/BoxProduct";
import Category from "../components/Category";
import Background from "..//components/BackgroundProduct";
import ViewProduct from "../components/ViewProduct";

const PageLojinha = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([]);
  const [productClick, setProductClick] = useState([]);

  useEffect(() => {
    fetch("http://lojinha-virtual-api.herokuapp.com/products").then(
      async (response) => setProduct(await response.json())
    );
  }, []);

  const list = (pdct, on) => (
    <a href='#product'
      onClick={() => {
        setShow(true);
        setProductClick(pdct)
      }}
    >
      <BoxProduct
        title={pdct.category}
        productName={pdct.name}
        price={pdct.price}
        imgUrl={pdct.imgUrl}
        id={pdct._id}
      />
    </a>
  );

  const ShowProduct = () => (
    <>
      <Background active={show} />
      <ViewProduct
        price={productClick.price}
        productName={productClick.name}
        imgUrl={productClick.imgUrl}
        idProduct={productClick._id}
        active={show}
        close={() => setShow(false)}
      />
    </>
  );

  return (
    <>
      <Header />
      <Container>
        <Category title="Sugestão do Vendedor">
          {product.map((pdct) =>pdct.category === "Sugestão do Vendedor"&&list(pdct))}
        </Category>

        <Category title="Brinquedos">
          {product.map((pdct) => pdct.category === "Brinquedos" && list(pdct))}
        </Category>

        <Category title="Rações">
          {product.map((pdct) => pdct.category === "Rações" && list(pdct))}
        </Category>
      </Container>
      <ShowProduct />
    </>
  );
};

export default PageLojinha;
