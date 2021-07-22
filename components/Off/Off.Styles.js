import styled from "styled-components";
import { colors, fonts } from "../styles";

export const Off = styled.div`
  position: absolute;
  top: 0.4rem;
  z-index: 2;
  display: ${(props) => (props.off <= 0 ? "none" : "block")};
  padding: 0.7% 2%;
  background: ${colors.detail};

`;