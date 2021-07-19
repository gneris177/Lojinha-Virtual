import styled from "styled-components";
import { fonts, metrics, colors } from "../styles";

export const Link = styled.a`
  word-wrap: normal;
  font-family: ${fonts.text};
  font-weight: 500;
  font-size: ${metrics.regular};
  line-height: 22px;
  text-decoration-line: underline;
  color: ${(props) => (props.color ? props.color : "#b41c8b")};
`;

export const LinkBlack = styled(Link)`
  color: #3f3f3f;
  text-decoration-line: none;
`;
