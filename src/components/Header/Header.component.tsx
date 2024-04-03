import logo from "../../../public/logo/bx-logo.png";
import logo2x from "../../../public/logo//bx-logo@2x.png";
import logo3x from "../../../public/logo/bx-logo@3x.png";
import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Header>
      <S.Image
        src={logo}
        srcSet={`${logo2x} 1000w, ${logo3x} 2000w`}
        alt="Logo"
      />
    </S.Header>
  );
};

export default Header;
