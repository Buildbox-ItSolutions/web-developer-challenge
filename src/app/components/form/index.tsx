import { Button } from "../buttons";
import { ImageInput, Input, TextArea } from "../inputs";
import { Actions, FormContainer } from "./style";

export const Form = () => {
  return (
    <FormContainer>
      <div>
        <ImageInput />
      </div>
      <div style={{ gap: "8px", width: "100%" }}>
        <Input type="text" placeholder="Name" />
        <TextArea placeholder="Message" />
      </div>
      <Actions>
        <Button noBg>Descartar</Button>
        <Button>Publicar</Button>
      </Actions>
    </FormContainer>
  );
};
