import styled from "styled-components";
import { colors } from "../styles";

import { ArrowCircleLeft } from "@styled-icons/evaicons-solid/ArrowCircleLeft";

export const HeaderMobile = styled.header`
  width: 100%;
  height: 50px;
  padding: 2%;
  display: none;
  background: ${colors.textPerson};
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const IconLeft = styled(ArrowCircleLeft)`
  width: 37px;
  color: #fff;
`;
