import styled from "styled-components";
import { colors, metrics } from "../styles";

export const Wrapper = styled.nav`
  background: ${colors.bgSecundary};
  padding: 1% 5%;
  border: 1px solid #e0e0e0;

  @media (max-width: 600px) {
    overflow: scroll;
    padding: 3% 5%;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 550px;
`;

export const Items = styled.li`
  list-style: none;
`;

export const BoxSearch = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
