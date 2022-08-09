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
        <Input onFocus={handleFocus} />
        <BoxText onFocus={handleFocus} />
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
