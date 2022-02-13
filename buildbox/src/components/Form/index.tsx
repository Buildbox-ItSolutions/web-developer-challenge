import { StyledButton } from "../Button/style";
import { StyledMessageTextArea } from "../InputMessage/style";
import { StyledInputName } from "../InputName/style";
import { FormContainer } from "./style";
import defaultImage from "../../assets/image.svg";
import trash from "../../assets/trash.svg";
import { useProvider } from "../../providers/Provider";
import { toast } from "react-toastify";
import { ProfilePicture } from "../ProfilePicture/style";

const Form = () => {
  const {
    name,
    setName,
    message,
    setMessage,
    photo,
    setPhoto,
    data,
    messages,
    setMessages,
  } = useProvider();
  const coolImages = require("cool-images");

  return (
    <FormContainer>
      {photo === defaultImage ? (
        <div
          className="defaultPhotoContainer"
          onClick={() => {
            setPhoto(coolImages.one(88, 88));
          }}
        >
          <img src={photo} alt="default" />
        </div>
      ) : (
        <div className="profilePhotoContainer">
          <ProfilePicture className="profilePhoto" src={photo} alt="profile" />
          <img
            src={trash}
            alt="trash"
            className="trash"
            onClick={() => setPhoto(defaultImage)}
          />
        </div>
      )}

      <StyledInputName
        placeholder="Digite seu nome"
        id="name"
        value={name}
        onChange={(e: any) => {
          setName(e.target.value);
        }}
      />
      <StyledMessageTextArea
        name="text"
        rows={3}
        value={message}
        placeholder="Mensagem"
        onChange={(e: any) => setMessage(e.target.value)}
      />
      <div className="buttons">
        <button
          className="remove"
          onClick={() => {
            setMessage("");
            setName("");
            setPhoto(defaultImage);
          }}
        >
          Descartar
        </button>
        <StyledButton
          color="inherit"
          disabled={
            name && message !== "" && photo !== defaultImage ? false : true
          }
          onClick={() => {
            setMessages([...messages, data]);
            toast.success("Post enviado!", {
              onOpen: () => {
                setName("");
                setMessage("");
                setPhoto(defaultImage);
              },
            });
          }}
        >
          Publicar
        </StyledButton>
      </div>
    </FormContainer>
  );
};
export default Form;
