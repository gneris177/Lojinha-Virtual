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

export const Text = styled.h1`
  font-family: ${fonts.text};
  font-size: ${(props) => checkSize(props.size)};
  font-weight: ${(props) => props.bold?500:400};

  @media(max-width: 550px) {
    font-size: .7em;
  }
`;
