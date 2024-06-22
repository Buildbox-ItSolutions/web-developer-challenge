import { Image } from "lucide-react";
import { Input } from "../Input";
import { Container, IconContainer } from "./style";

export function ImageInput() {
  return (
    <label htmlFor="image">
      <Container>
        <IconContainer>
          <Image size={32} />
        </IconContainer>
        <Input
          type="file"
          id="image"
          name="image"
          style={{ display: "none" }}
        />
      </Container>
    </label>
  );
}
