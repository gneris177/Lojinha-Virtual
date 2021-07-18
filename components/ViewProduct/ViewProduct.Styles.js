import styled from "styled-components";
import { colors, fonts } from "../styles";

//icons
import { ShoppingCart } from "@styled-icons/material/ShoppingCart";
import { Close } from "@styled-icons/evaicons-solid/Close";

export const Wrapper = styled.div`
  margin: 1.4rem 0.7rem 0 0.8rem ;
  position: absolute;
  display: ${(props) => (props.active ? "block" : "none")};
  z-index: 6;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 230px;
  padding: 1%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: red;
  left: 0;
right: 0;  
top: 0;
bottom: 0;
margin: auto;

  @media (max-width: 1205px) {
    height: 336px;
    width: 200px;
    left: 56px;
  }
`;

export const Box = styled.div`
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: space-between;
`;

export const Off = styled.div`
  margin-bottom: 10px;
  height: 20px;
  width: 60px;
  background: blue;
`;

export const Price = styled.p`
  font-weight: 700;
  color: #b41c8b;
  font-family: Quicksand;
`;

export const IconCart = styled(ShoppingCart)`
  width: 23px;
  color: #3f3f3f;
`;

export const IconClose = styled(Close)`
position: absolute;
  top: -10px;
  width: 23px;
  color: #fff;
`;
