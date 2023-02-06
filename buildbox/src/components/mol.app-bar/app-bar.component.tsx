//@ts-ignore
import logo from "../../assets/logo.png"; // relative path to image
import { AppBarContainer, Logo } from "./app-bar.component.styled";

export const AppBar: React.FunctionComponent = () => (
  <AppBarContainer>
    <Logo src={logo} alt="logo" />
  </AppBarContainer>
);
