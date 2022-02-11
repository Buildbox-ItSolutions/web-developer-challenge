import { useState } from "react";
import { StyledButton } from "../Button/style";
// import GlobalButton from "../Button";
import { FormContainer, StyledInputName, StyledMessageTextArea } from "./style";

const Form = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <FormContainer>
      <div className="photo"></div>
      <StyledInputName placeholder="Digite seu nome" id="name" />
      <StyledMessageTextArea
        name="text"
        rows={3}
        placeholder="Mensagem"
        id="message"
      />
      <div className="buttons">
        <button className="remove">Descartar</button>
        <StyledButton>Publicar</StyledButton>
      </div>
    </FormContainer>
  );
};
export default Form;
