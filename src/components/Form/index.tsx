import { Image, TrashSimple } from "@phosphor-icons/react";
import { ButtonContainer, FormContainer } from "./style";

export function Form() {
  return (
    <FormContainer>
      <div className="photo-container">
        <div className="img-post-button">
          <Image size={30} />
        </div>
        <TrashSimple size={24} />
      </div>
      <div className="input-container">
        <div className="label-wrapper">
          <label htmlFor="name">Digite seu nome</label>
          <input type="text" id="name" placeholder="Digite seu nome" />
        </div>
        <div className="label-wrapper">
          <label htmlFor="message">Digite seu nome</label>
          <textarea id="message" placeholder="Mensagem" />
        </div>
      </div>
      <ButtonContainer>
        <a href="">Descartar</a>
        <button>Publicar</button>
      </ButtonContainer>
      
    </FormContainer>
  )
}