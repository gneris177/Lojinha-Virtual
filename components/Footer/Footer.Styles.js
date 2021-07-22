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
  padding: 2% 4%;
  background: ${colors.bgSecundary};
  border-top: 5px solid #b41c8b;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const BoxSocial = styled.div`
  padding: 5px;
`;

export const IconYt = styled(YoutubeWithCircle)`
  color: #ff0000;
  width: 33px;
  margin-left: 4px;
`;

export const IconTwitter = styled(TwitterWithCircle)`
  color: #43bceb;
  width: 33px;
  margin-left: 4px;
`;

export const IconInsta = styled(InstagramWithCircle)`
  color: #F56040;
  width: 33px;
  margin-left: 4px;
`;

export const IconFb = styled(Facebook)`
  color: #1877f2;
  width: 33px;
  margin-left: 4px;
`;
