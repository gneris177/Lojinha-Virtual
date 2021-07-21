import styled from "styled-components";
import { colors, fonts } from "../styles";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media(max-width: 700px) {justify-content: center;} 
`;

export const Title = styled.h3`
  margin: 4% 0 0 0;
  font-family: ${fonts.title};
  font-weight: 700;
`;
