import styled from "styled-components";
import { colors } from "../styles";

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem;
  height: 2.7rem;
  width: 14rem;
  background: #b41c8b;
  color: ${colors.textWhite};
  border-radius: 4px;
  border: none;
  font-size: 1em;
`;
