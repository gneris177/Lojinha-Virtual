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
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch("http://lojinha-virtual-api.herokuapp.com/products").then(
      async (response) => setProduct(await response.json())
    );
  }, []);

  const listProduct = (pdct) => (
    <a
      href="#product"
      onClick={() => {
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
      <Background
        active={show}
        close={() => setShow(false)}
        idProduct={productClick._id}
      >
        <ViewProduct
          price={productClick.price}
          productName={productClick.name}
          off={productClick.off}
          imgUrl={productClick.imgUrl}
          idProduct={productClick._id}
          desc={productClick.desc}
          fuctionClick={() => {
            setCartPruducts([...cartPruducts, productClick._id]);
            setValueTotal(valueTotal + productClick.price * quantity);
          }}
          quantity={quantity}
          lessQuantity={() => setQuantity(quantity - 1)}
          moreQuantity={() => setQuantity(quantity + 1)}
          close={() => setShow(false)}
        />
      </Background>
    </>
  );

  return (
    <>
      <Header
        cartProducts={cartPruducts}
        valueTotal={valueTotal}
        quantity={quantity}
      />
      <SubHeader />
      <Container>
        <Search placeholder="O que você procura?" />
        <Category title="Sugestão do Vendedor">
          {product.map(
            (pdct) => pdct.category === "Sugestão do Vendedor" && listProduct(pdct)
          )}
        </Category>
        <Category title="Brinquedos">
          {product.map((pdct) => pdct.category === "Brinquedos" && listProduct(pdct))}
        </Category>
        <Category title="Rações">
          {product.map((pdct) => pdct.category === "Rações" && listProduct(pdct))}
        </Category>
      </Container>
      <Cart
        responsive
        products={cartPruducts}
        valueTotal={valueTotal}
        quantity={quantity}
      />
      <ShowProduct />
      <Footer />
    </>
  );
};

export default PageLojinha;
