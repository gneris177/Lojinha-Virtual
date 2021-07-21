import styled from "styled-components";
import { colors, fonts } from "../styles";

//icons
import { ShoppingCart } from "@styled-icons/fa-solid/ShoppingCart";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.bgSecundary};

  @media (max-width: 950px) { display: none; }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.margin && "28px"};
`;

export const Text = styled.p`
  padding-left: 0.3rem;
  font-size: 0.8em;
  font-family: ${fonts.text};
  font-weight: 500;
  color: #3f3f3f;
`;

export const WrapperResponsive = styled.div`
  display: none;
  width: 96%;
  z-index: 2;
  position: fixed;
  top: 90%;
  left: 2%;
  padding: 2%;
  justify-content: space-between;
  background: ${colors.textPerson};
  color: ${colors.textWhite};
  flex-wrap: wrap;

  @media (max-width: 950px) { display: flex; }
`;

export const Price = styled(Text)`
  font-weight: 700;
  color: #b41c8b;
  margin-left: 1.5rem;
`;

export const IconCart = styled(ShoppingCart)`
  width: 20px;
`;
