import styled from "styled-components";
import { colors, fonts } from "../styles";

export const Wrapper = styled.main`
  background: ${(props) => props.bgSecundary?colors.bgSecundary:colors.bgPrimary};
`;