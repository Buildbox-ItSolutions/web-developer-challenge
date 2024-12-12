import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img
        src="/bx-logo.png"
        srcSet="/bx-logo@2x.png 2x,
             /bx-logo@3x.png 3x"
        className="bx-logo"
      />
    </Container>
  );
}
