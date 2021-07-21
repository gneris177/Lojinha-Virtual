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

const checkColor = (color) => {
  switch (color) {
    case "person":
      return colors.textPerson;
      break;
    case "cinze":
      return colors.textSecundary;
      break;
    case "dark":
      return colors.text;
      break;
    case "white":
      return colors.textWhite;
      break;
    case "red":
      return colors.red;
      break;
    case "green":
      return colors.detail;
    default:
      return "colors.text";
      break;
  }
};

export const Text = styled.p`
  font-family: ${fonts.text};
  font-weight: ${(props) => (props.bold ? props.bold : 400)};
  font-size: ${(props) => checkSize(props.size)};
  color: ${(props) => checkColor(props.color)};
  white-space: pre-wrap;
`;
