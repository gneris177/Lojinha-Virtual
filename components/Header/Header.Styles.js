import styled from "styled-components";
import { TimeFive } from "@styled-icons/boxicons-regular/TimeFive";
import { ShoppingCart } from "@styled-icons/material/ShoppingCart";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1% 2%;
`;

export const BoxPet = styled.div`
  margin-left: 2rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const IconTime = styled(TimeFive)`
  width: 13px;
  margin: 0 0 0 1.3rem;
`;

export const IconCart = styled(ShoppingCart)`
  width: 32px;
`;
