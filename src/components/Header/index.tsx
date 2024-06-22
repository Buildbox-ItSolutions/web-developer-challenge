import { Logo } from "../Logo";
import { ToggleTheme } from "../ToggleTheme";
import { Container, ToggleContainer } from "./style";

export function Header() {
  return (
    <Container>
      <Logo />
      <ToggleContainer>
        <ToggleTheme />
      </ToggleContainer>
    </Container>
  );
}
