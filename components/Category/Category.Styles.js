import styled from "styled-components";
import { colors, fonts } from "../styles";

export const Wrapper = styled.section`
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  margin-top: 4%;
  font-family: ${fonts.title};
  font-weight: 700;
`;
