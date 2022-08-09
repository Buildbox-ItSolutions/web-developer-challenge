import { useState } from "react";
import {
  BoxText,
  ButtonContainer,
  DisplayBoxContainer,
  Imagem,
  Input,
  TextSmall,
} from "../../styles/style";

export function DisplayBoxInput() {
  const [disableButton, setDisableButton] = useState(true);
  const [user,setUser] = useState(" ")
  const [message,setMessage] = useState("")
  const handleFocus = () => {
    setDisableButton(false);
  };

  return (
    <DisplayBoxContainer>
      <div className="ContainerImg">
        <label htmlFor="arquivo">
          <Imagem src="https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2020/09/Rio-araguaia-e1600879107526.jpg" />
        </label>
        <input type="file" name="arquivo" id="arquivo"></input>
      </div>
      <div className="ContainerInputs">
        <Input value={user} onChange={(e: any) => setUser(e.target.value)} onFocus={handleFocus} />
        <BoxText value={message} onChange={(e: any) => setMessage(e.target.value)} onFocus={handleFocus} />
      </div>
      <div className="ContainerButtons">
        <TextSmall underline>Descartar</TextSmall>
        <ButtonContainer disable={disableButton}>
          <p>Publicar</p>
        </ButtonContainer>
      </div>
    </DisplayBoxContainer>
  );
}
