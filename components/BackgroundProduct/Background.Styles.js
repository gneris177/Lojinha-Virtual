import styled from "styled-components";
import { colors, fonts } from "../styles";

export const Background = styled.div`
  position: absolute;
  top: 0;
  display: ${(props) => (props.active ? "flex" : "none")};
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
  z-index: 2;

  @media(max-width: 600px) {
    background-color: #fff;
    opacity: 1;
  }
`;
