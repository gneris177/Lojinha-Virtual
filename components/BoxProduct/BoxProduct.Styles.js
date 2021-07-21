import styled from "styled-components";
import { colors, fonts } from "../styles";

//icons
import { CartPlus } from "@styled-icons/fa-solid/CartPlus";

export const Wrapper = styled.div`
  margin: 1rem 0.3rem 0 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 230px;
  padding: 6%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: ${colors.bgSecundary};
  @media (max-width: 1205px) {
    height: 336px;
    width: 200px;
    left: 56px;
  }
`;

export const Box = styled.div`
  position: relative;
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content:  ${(props) => (props.start ? "start" : "space-between")};
  align-items: center;
`;

export const BoxImg = styled(Box)`
  @media(max-width: 700px) { border: 1px solid #EDEDED; }
`;

export const IconCart = styled(CartPlus)`
  width: 16px;
  color: ${colors.textPerson};
`;
