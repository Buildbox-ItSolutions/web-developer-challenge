import Button from "../Button";
import Input from "../Input";
import TextField from "../TextField";
import UploadImage from "../UploadImage";
import { BoxContainer, ButtonsContainer } from "./styles";

function InformationBox() {
  return (
    <BoxContainer>
      <UploadImage />
      <Input placeholder="Digite seu nome" />
      <TextField rows={5} cols={10} />
      <ButtonsContainer>
        <Button text="Descartar" />
        <Button text="Publicar" />
      </ButtonsContainer>
    </BoxContainer>
  );
}

export default InformationBox;
