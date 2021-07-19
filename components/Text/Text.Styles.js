import styled from "styled-components";
import { fonts, metrics, colors } from "../styles";

const checkSize = (size) => {
  switch (size) {
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

export const Text = styled.p`
  font-family: ${fonts.text};
  font-weight: ${(props) => (props.bold ? 500 : 400)};
  font-size: ${(props) => checkSize(props.size)};
  color: ${colors.text}
`;
