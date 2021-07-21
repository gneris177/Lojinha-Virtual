import styled from "styled-components";
import { fonts, metrics, colors } from "../styles";

export const Title = styled.h1`
  font-family: ${fonts.title};
  font-size: ${metrics.bigger};
  color: ${colors.text};
  @media (max-width: 550px) { font-size: 1.2em; }
`;
