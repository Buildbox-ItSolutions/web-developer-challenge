import { useContext, useEffect, useRef, useState } from "react";
import { ContextManager } from "../../contex";
import {
  BoxText,
  ButtonContainer,
  DisplayBoxContainer,
  Imagem,
  ImagemCOntainerCircle,
  Input,
  IconTrash,
  TextSmall,
} from "../../styles/style";

export function DisplayBoxInput() {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [start, setStart] = useState<boolean>(true);
  const [user, setUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");

  const formImgRef = useRef<any>({});
  const { setComments, comments } = useContext(ContextManager);

  const handleFocus = (): void => {
    setDisableButton(false);
  };

  const discartForm = (): void => {
    setStart(true);
    setUser("");
    setMessage("");
    formImgRef.current.src = "image.png";
    setImgUrl("")
    setDisableButton(true)
  };

  const handlesubmit = (): void => {
    if(user !== "" && message !== "" && imgUrl !== "") {
      setComments((comments: any) => [
        ...comments,
        {
          id: Math.random() * 100000,
          user: user,
          message,
          img: imgUrl,
        },
      ]);
      discartForm();
    }
  };

  const changeImage = (evt: any): void => {
    try {
      const [file] = evt.target.files;
      if (file) {
        setStart(false);
        formImgRef.current.src = URL.createObjectURL(file);
        setImgUrl(URL.createObjectURL(file));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDiscartImg = (): void => {
    formImgRef.current.src = "image.png";
    setImgUrl('')
    setStart(true);
  }
  useEffect(() => {
    console.log(comments);
  }, [comments]);
  return (
    <DisplayBoxContainer>
      <div className="ContainerImg">
        <ImagemCOntainerCircle>
          <label htmlFor="arquivo">
            <Imagem start={start} ref={formImgRef} src="image.png" />
          </label>
          <input
            type="file"
            name="arquivo"
            onChange={changeImage}
            id="arquivo"
            required
          />
        </ImagemCOntainerCircle>
        <IconTrash src="trash.png" onClick={handleDiscartImg} style={{marginLeft:"10px"}} />
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
        <TextSmall underline onClick={discartForm}>
          Descartar
        </TextSmall>
        <ButtonContainer onClick={handlesubmit} disable={disableButton}>
          <p>Publicar</p>
        </ButtonContainer>
      </div>
    </DisplayBoxContainer>
  );
}
