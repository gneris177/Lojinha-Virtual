import styled from "styled-components";
import { colors, fonts } from "../styles";

//icons
import { ShoppingCart } from "@styled-icons/material/ShoppingCart";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  background: ${colors.bgSecundary};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  padding-left: 0.3rem;
  font-size: 0.8em;
  font-family: ${fonts.text};
  font-weight: 500;
  color: #3f3f3f;
`;

export const Price = styled(Text)`
  font-weight: 700;
  color: #b41c8b;
  margin-left: 1.5rem;
`;

export const IconCart = styled(ShoppingCart)`
  width: 23px;
  color: #3f3f3f;
`;
