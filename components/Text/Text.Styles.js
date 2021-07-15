import styled from "styled-components";
import { fonts, metrics, colors } from "../styles";

const checkSize = (size) => {
  switch (size) {
    case "big":
      return metrics.big;
      break;
    case "regular":
      return metrics.regular;
      break;
    case "small":
      return metrics.small;
      break;
    case "minimum":
      return metrics.minimum;
      break;
    default:
      return metrics.regular;
      break;
  }
};

const checkSizeResponsive = (size) => {
  switch (size) {
    case "big":
      return metrics.bigResponsive;
      break;
    case "regular":
      return metrics.regularResponsive;
      break;
    case "small":
      return metrics.smallResponsive;
      break;
    case "minimum":
      return metrics.minimumResponsive;
      break;
    default:
      return metrics.regularResponsive;
      break;
  }
};

export const Text = styled.p`
  font-family: ${fonts.text};
  font-size: ${(props) => checkSize(props.size)};
  font-weight: ${(props) => (props.bold ? 500 : 400)};

  @media (max-width: 550px) {
    font-size: ${(props) => checkSizeResponsive(props.size)};
  }
`;
