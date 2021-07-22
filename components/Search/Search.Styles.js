import styled from "styled-components";
import { fonts, metrics, colors } from "../styles";

import { Search } from "@styled-icons/boxicons-regular/Search";

export const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem 0.7rem;
  width: ${(props) => (props.responsive ? "100%" : "45%")};
  margin: 1rem;
  border: 1px solid #dddddd;
  border-radius: 3px;
  background: #fff;
  @media (max-width: 600px) {
    display: ${(props) => (props.responsive ? "flex" : "none")};
  }
`;

export const Input = styled.input`
  width: ${(props) => (props.responsive ? "95%" : "100%")};
  border: none;
  outline: none;
  font-size: 0.9em;
  font-family: ${fonts.text};
  font-weight: 400;
`;

export const IconSearch = styled(Search)`
  width: 1rem;
`;
