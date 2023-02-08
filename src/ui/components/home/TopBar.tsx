import { Container } from "../../partials/generic/container";
import { HomeTopBar, ImageContainer } from "../../partials/home/HomeLayout";
import logo1x from "../../assets/bx-logo.png";
import logo2x from "../../assets/bx-logo@2x.png";
import logo3x from "../../assets/bx-logo@3x.png";

export const TopBar= ()=>{
  const logo: string= `${logo1x}`;
  const logoSrcSet: string = `${logo1x} 1x, ${logo2x} 2x, ${logo3x} 3x`;

    return(
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
}