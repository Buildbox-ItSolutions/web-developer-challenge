import { useRef, useState } from "react";
import {
  BoxText,
  ButtonContainer,
  DisplayBoxContainer,
  Imagem,
  ImagemCOntainerCircle,
  Input,
  TextSmall,
} from "../../styles/style";

export function DisplayBoxInput() {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [start, setStart] = useState<boolean>(true);
  const [user, setUser] = useState<string>(" ");
  const [message, setMessage] = useState<string>("");
  const formImgRef = useRef<any>({});

  const handleFocus = () => {
    setDisableButton(false);
  };
  const handlesubmit = () => {
    console.log(user);
    console.log(message);
  };

  const changeImage = (evt: any): void => {
    try {
      const [file] = evt.target.files;
      formImgRef.current.src = URL.createObjectURL(file);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DisplayBoxContainer>
      <div className="ContainerImg">
        <ImagemCOntainerCircle>
          <label htmlFor="arquivo">
            <Imagem start={start.toString()} ref={formImgRef} src="image.png" />
          </label>
          <input
            type="file"
            name="arquivo"
            onChange={changeImage}
            id="arquivo"
          />
        </ImagemCOntainerCircle>
      </div>
      <div className="ContainerInputs">
        <Input
          value={user}
          onChange={(e: any) => setUser(e.target.value)}
          onFocus={handleFocus}
        />
        <BoxText
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
          onFocus={handleFocus}
        />
      </div>
      <div className="ContainerButtons">
        <TextSmall underline>Descartar</TextSmall>
        <ButtonContainer onClick={handlesubmit} disable={disableButton}>
          <p>Publicar</p>
        </ButtonContainer>
      </div>
    </DisplayBoxContainer>
  );
}
