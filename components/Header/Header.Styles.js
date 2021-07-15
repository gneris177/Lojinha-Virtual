import styled from "styled-components";
import { colors, metrics } from "../styles";

//icons
import { TimeFive } from "@styled-icons/boxicons-regular/TimeFive";
import { ShoppingCart } from "@styled-icons/material/ShoppingCart";
import { Motorcycle } from "@styled-icons/fa-solid/Motorcycle";

export const Wrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2%;
  background: ${colors.bgSecundary};

  @media (max-width: 880px) {
    justify-content: center;
  }
`;

export const Main = styled.div`
  display: flex;
`;

export const Box = styled(Main)`
  padding: 0.2rem 0;
  align-items: center;
`;

export const BoxSecudary = styled(Box)`
  padding-right: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BoxCart = styled(Main)`
  margin: auto 0;
  @media (max-width: 880px) {
    display: none;
  }
`;

export const BoxTitle = styled(Box)``;

export const divq = styled(Main)`
  flex-direction: column;
  justify-content: center;

  @media (max-width: 540px) {
    justify-content: start;
  }
`;

export const fig = styled.figure`
  margin: auto 1.5rem auto 0 ;

  @media (max-width: 580px) {
  }
`;

//icons
export const IconTime = styled(TimeFive)`
  width: 13px;
  margin: 0 0 0 1.3rem;
`;

export const IconCart = styled(ShoppingCart)`
  width: 23px;
`;

export const IconDelivery = styled(Motorcycle)`
  width: 16px;
`;
