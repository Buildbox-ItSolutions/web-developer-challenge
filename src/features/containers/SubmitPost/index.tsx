import { Button } from "../../../components/Button";
import { Cards } from "../../../components/Cards";
import { Input } from "../../../components/Input";
import { Textarea } from "../../../components/Textarea";
import { FormContainer } from "./style";

export function SubmitPost() {
  return (
    <Cards.Root>
      <Cards.Body>
        <FormContainer>
          <Input type="text" placeholder="Digite seu nome" name="name" />
          <Textarea placeholder="Mensagem" name="message" />
        </FormContainer>
      </Cards.Body>
      <Cards.Footer>
        <Button variant="outline">Descartar</Button>
        <Button>Publicar</Button>
      </Cards.Footer>
    </Cards.Root>
  );
}
