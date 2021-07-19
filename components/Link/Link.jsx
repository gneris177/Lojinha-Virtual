import * as S from "./Link.Styles";

const Link = ({ text, color, LinkBlack, href }) =>
  LinkBlack ? (
    <S.LinkBlack href={href}>{text}</S.LinkBlack>
  ) : (
    <S.Link href={href}>{text}</S.Link>
  );

export default Link;
