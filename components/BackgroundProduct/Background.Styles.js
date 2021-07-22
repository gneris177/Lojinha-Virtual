import styled from "styled-components";
import { colors } from "../styles";

export const Background = styled.div`
  position: absolute;
  top: 0;
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;

  @media (max-width: 800px) {
    display: ${(props) => (props.active ? "block" : "none")};
    width: 100%;
    height: ${(props) => `${props.height}px`};
    background-color: ${colors.bgSecundary};
    opacity: 1;
  }
`;
