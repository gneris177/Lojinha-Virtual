import styled from "styled-components";
import { colors, fonts } from "../styles";

//icons
import { ShoppingCart } from "@styled-icons/fa-solid/ShoppingCart";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.bgSecundary};

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.margin && "28px"};
`;

export const BoxRadiusPrice = styled(Box)`
  margin: auto 0;
  padding: 5px 20px;
  text-align: center;
  border-radius: 1000px;
  background: #ffffff;
`;

export const WrapperResponsive = styled.div`
  display: none;
  width: 96%;
  position: fixed;
  top: 90%;
  left: 2%;
  padding: 2%;
  justify-content: space-between;
  background: ${colors.textPerson};
  color: ${colors.textWhite};
  flex-wrap: wrap;
  @media (max-width: 950px) {
    display: flex;
  }
  @media (max-width: 800px) {
    z-index: 3;
  }
`;

export const IconCart = styled(ShoppingCart)`
  width: 17px;
  margin-right: ${(props) => props.margin && "10px"};
`;
