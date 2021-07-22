import styled from "styled-components";
import { colors, fonts } from "../styles";

//icons
import { Close } from "@styled-icons/evaicons-solid/Close";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 65%;
  height: 65%;
  padding: 0 3% 2%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: ${colors.bgSecundary};

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 800px) {
    height: 100vh;
    padding: 15% 2%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
    border: none;
    align-items: space-between;
  }
`;

export const Box = styled.div`
  white-space: pre-wrap;
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: ${(props) => props.row && "center"};
  justify-content: space-between;
  margin-top: ${props => props.margin&&'0.5rem'};
  @media(max-width: 800px) {
    margin-top: ${props => props.margin&&'2rem'}

  }
`;

export const Quantity = styled(Box)`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const Btn = styled.button`
  padding: .5rem 1rem;
  color: ${colors.textPerson};
  font-family: ${fonts.text};
  font-size: 1.2em;
  font-weight: 700;
  border: none;
  background: none;
`;

export const BoxImg = styled.div`
  margin: auto;
`;

export const TextArea = styled.input`
  width: 100%;
  height: 10vh;
  border: 1px solid #dcdcdc;
`;

export const IconClose = styled(Close)`
  position: absolute;
  top: -22px;
  right: -23px;
  width: 31px;
  color: #fff;
  @media (max-width: 800px) {
    display: none;
  }
`;
