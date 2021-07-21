import React, { useState, useEffect } from "react";

//components
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Container from "../components/Container";
import BoxProduct from "../components/BoxProduct";
import Category from "../components/Category";
import Background from "..//components/BackgroundProduct";
import ViewProduct from "../components/ViewProduct";
import Search from "../components/Search";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const PageLojinha = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([]);
  const [productClick, setProductClick] = useState([]);
  const [cartPruducts, setCartPruducts] = useState([]);
  const [valueTotal, setValueTotal] = useState(0);


  useEffect(() => {
    fetch("http://lojinha-virtual-api.herokuapp.com/products").then(
      async (response) => setProduct(await response.json())
    );
  }, []);

  const list = (pdct) => (
    <a href="#product" onClick={() => {
        setShow(true);
        setProductClick(pdct);
      }}
    >
      <BoxProduct
        title={pdct.category}
        productName={pdct.name}
        price={pdct.price}
        priceDiscount={pdct.priceDiscount}
        off={pdct.off}
        imgUrl={pdct.imgUrl}
        id={pdct._id}
      />
    </a>
  );

  const ShowProduct = () => (
    <>
      <Background active={show}>
      <ViewProduct
        price={productClick.price}
        productName={productClick.name}
        off={productClick.off}
        imgUrl={productClick.imgUrl}
        idProduct={productClick._id}
        desc={productClick.desc}
        fuctionClick={() => {
          setCartPruducts([...cartPruducts, productClick._id]);
          setValueTotal(valueTotal + productClick.price);
        }}
        close={() => setShow(false)}
      />
      </Background>
    </>
  );

  return (
    <>                      
      <Header cartProducts={cartPruducts} valueTotal={valueTotal} />
      <SubHeader />
      <Container>
        <Search placeholder="O que você procura?" />
        <Category title="Sugestão do Vendedor">
          {product.map((pdct) => pdct.category === "Sugestão do Vendedor" && list(pdct))}
        </Category>
        <Category title="Brinquedos">
          {product.map((pdct) => pdct.category === "Brinquedos" && list(pdct))}
        </Category>
        <Category title="Rações">
          {product.map((pdct) => pdct.category === "Rações" && list(pdct))}
        </Category>
      </Container>
      <Cart responsive products={cartPruducts} valueTotal={valueTotal} />     
      <ShowProduct />
      <Footer />
    </>
  );
};

export default PageLojinha;
