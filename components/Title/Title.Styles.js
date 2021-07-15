import styled from "styled-components";
import { fonts, metrics, colors } from "../styles";


export const Title = styled.h1`
  font-family: ${fonts.title};
  font-size: ${metrics.big};
  
  @media (max-width: 550px) {
    font-size: ${metrics.bigResponsive};
  }
`;
