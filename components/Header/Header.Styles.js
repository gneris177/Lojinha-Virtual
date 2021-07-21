import styled from "styled-components";
import { colors } from "../styles";

//icons
import { TimeFive } from "@styled-icons/boxicons-regular/TimeFive";
import { Motorcycle } from "@styled-icons/fa-solid/Motorcycle";

export const Wrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1% 2%;
  background: ${colors.bgSecundary};
  border-bottom: 4px solid #b41c8b;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  color: ${colors.detail};
`;

export const IconDelivery = styled(Motorcycle)`
  width: 16px;
`;
