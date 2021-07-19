import styled from "styled-components";
import { colors } from "../styles";

//icons
import { TimeFive } from "@styled-icons/boxicons-regular/TimeFive";
import { ShoppingCart } from "@styled-icons/material/ShoppingCart";
import { Motorcycle } from "@styled-icons/fa-solid/Motorcycle";

export const Wrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1% 2%;
  background: ${colors.bgSecundary};
  border-bottom: 4px solid #b41c8b;
  @media (max-width: 900px) { justify-content: center; }
`;

export const Main = styled.div`
  display: flex;
  @media (max-width: 600px) { flex-wrap: wrap; }
`;

export const Box = styled(Main)`
  padding: 0.2rem 0;
  align-items: center;
`;

export const BoxSecudary = styled(Box)`
  padding-right: 2rem;
`;

export const BoxCart = styled(Main)`
  margin: auto 0;
  @media (max-width: 900px) { display: none; }
`;

export const BoxTitle = styled(Box)`
`;

export const divq = styled(Main)`
  margin-left: 1.4em;
  flex-direction: column;
  justify-content: center;
`;

//icons
export const IconTime = styled(TimeFive)`
  width: 12px;
  margin: 0 0 0 1.3rem;
`;
export const IconCart = styled(ShoppingCart)`
  width: 23px;
`;
export const IconDelivery = styled(Motorcycle)`
  width: 16px;
`;
