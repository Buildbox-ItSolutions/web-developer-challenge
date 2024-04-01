import { FormEvent, useRef } from "react";
import {
  ClearBtn,
  FormStyled,
  InputStyled,
  PublishBtn,
  TextareaStyled,
} from "./ui";
import ImageInput from "./image-input";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submit");
  };
  const handleClickOnClearBtn = () => {
    ref.current?.reset();
  };

  return (
    <FormStyled ref={ref} onSubmit={(event) => handleSubmit(event)}>
      <ImageInput />
      <InputStyled autoComplete="off" placeholder="Digite seu nome" required />
      <TextareaStyled
        autoComplete="off"
        maxLength={300}
        placeholder="Mensagem"
        required
      />
      <div>
        <ClearBtn type="button" onClick={handleClickOnClearBtn}>
          Descartar
        </ClearBtn>
        <PublishBtn data-submit type="submit">
          Publicar
        </PublishBtn>
      </div>
    </FormStyled>
  );
}
