import styled from "styled-components";
import { colors } from "../styles";

export const Background = styled.div`
  position: absolute;
  top: 0;
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  
  @media (max-width: 800px) {
    display: ${(props) => (props.active ? "block" : "none")};
    background-color: ${colors.bgSecundary};
    height: 1200px;
    opacity: 1;
  }
`;
