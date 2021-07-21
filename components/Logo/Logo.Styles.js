import styled from "styled-components";
import { colors } from "../styles";
import Image from "next/image";

export const Logo = styled(Image)`
  border-radius: 50%;
  background-color: ${colors.textPerson};
`;