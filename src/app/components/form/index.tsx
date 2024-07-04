import { ImageInput, Input, TextArea } from "../inputs";
import { Actions, FormContainer } from "./style";

export const Form = () => {
  return (
    <FormContainer>
      <div>
        <ImageInput />
      </div>
      <Input type="text" placeholder="Name" />
      <TextArea placeholder="Message" />
      <Actions>
        <button type="submit">Submit</button>
      </Actions>
    </FormContainer>
  );
};
