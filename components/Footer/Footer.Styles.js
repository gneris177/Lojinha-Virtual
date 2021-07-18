import styled from "styled-components";
import { colors, metrics } from "../styles";

//icons
import { YoutubeWithCircle } from "@styled-icons/entypo-social/YoutubeWithCircle";
import { TwitterWithCircle } from "@styled-icons/entypo-social/TwitterWithCircle";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";
import { Facebook } from "@styled-icons/bootstrap/Facebook";

export const Wrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  background: ${colors.bgSecundary};
  border-top: 5px solid #b41c8b;
`;

export const BoxSocial = styled.div`
  display: flex;
`;

export const Link = styled.a`
  left: 57.23%;
  right: 32.62%;
  top: 96.43%;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: ${metrics.regular};
  line-height: 22px;
  text-decoration-line: underline;
  color: #b41c8b;
`;

export const IconYt = styled(YoutubeWithCircle)`
  color: #ff0000;
  width: 30px;
`;

export const IconTwitter = styled(TwitterWithCircle)`
  color: #43bceb;
  width: 30px;
`;

export const IconInsta = styled(InstagramWithCircle)`
  color: linear-gradient(180deg, #D8307B 0%, #F39259 100%);
  width: 30px;
`;

export const IconFb = styled(Facebook)`
  color: #1877F2;
  width: 30px;
`;