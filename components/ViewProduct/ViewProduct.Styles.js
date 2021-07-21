import styled from "styled-components";
import { colors, fonts } from "../styles";

//icons
import { ArrowCircleLeft } from "@styled-icons/evaicons-solid/ArrowCircleLeft";
import { Close } from "@styled-icons/evaicons-solid/Close";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 65%;
  height: 65%;
  padding: 3%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: ${colors.bgSecundary};

  @media (max-width: 1200px) { width: 85%; }

  @media (max-width: 800px) {
    height: 100vh;
    padding: 15% 2%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
    border: none;
  }
`;

export const Box = styled.div`
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  @media (max-width: 800px) { display: none;}
`;

export const IconLeft = styled(ArrowCircleLeft)`
  display: none;
  width: 37px;
  color: #fff;

  @media (max-width: 800px) { display: flex; }
`;

export const HeaderMobile = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  padding: 2%;
  top: 0;
  left: 0;
  z-index: 2;
  display: none;
  background: #b41c8b;
  align-items: center;
  
  @media (max-width: 800px) { display: flex; }
`;
