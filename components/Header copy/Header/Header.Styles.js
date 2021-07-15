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
  padding: 2%;
  background: ${colors.bgSecundary};
`;

export const Main = styled.div`
  display: flex;
`;

export const Box = styled(Main)`
  display: flex;
  align-items: center;
`;

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
 