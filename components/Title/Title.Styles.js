import styled from "styled-components";
import { fonts, fontSize, colors } from "../styles";

const checkSize = (size) => {
  switch (size) {
    case "big":
      return fontSize.big;
      break;
    case "regular":
      return fontSize.regular;
      break;
    case "small":
      return fontSize.small;
      break;
    case "minimum":
      return fontSize.minimum;
      break;
    default:
      return fontSize.regular;
      break;
  }
};

export const Title = styled.h1`
  font-family: ${fonts.title};
  font-size: ${(props) => checkSize(props.size)};
`;
