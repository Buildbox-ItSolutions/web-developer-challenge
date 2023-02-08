import { Container } from "../generic/container";
import { HomeTopBar } from "./HomeTopBar";
import { ImageContainer } from "./partials/HomePartials";
import logo1x from "../../assets/bx-logo.png";
import logo2x from "../../assets/bx-logo@2x.png";
import logo3x from "../../assets/bx-logo@3x.png";

//Elemento cabeçalho da página.
//Page header element.

export const TopBar = () => {
  const logo: string = `${logo1x}`;
  const logoSrcSet: string = `${logo1x} 1x, ${logo2x} 2x, ${logo3x} 3x`;

  return (
    <HomeTopBar>
      <Container width="103px" height="45px" vAlign="center" hAlign="center">
        <ImageContainer
          width="103px"
          height="45px"
          src={logo}
          srcSet={logoSrcSet}
        />
      </Container>
    </HomeTopBar>
  );
};
