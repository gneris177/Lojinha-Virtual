import * as S from "./Off.Styles";

import Text from "../Text";

const Off = ({ off }) => (
  <S.Off off={off}>
    <Text color="white" bold={700} text={`${off} %OFF`} />
  </S.Off>
);

export default Off;
