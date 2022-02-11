import { Header } from "./styles";
import logo from "../../../assets/bx-logo.svg";
export default function Head() {
  return (
    <Header>
      <img src={logo} alt="BuildBox" />
    </Header>
  );
}
