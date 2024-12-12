import { useRef, useState } from "react";
import { Post } from "./styles";
import { Image, Trash } from "lucide-react";

interface Props {
  onSubmit: (data: any) => void;
}

const NewPostComponent = (props: Props) => {
  const photoRef = useRef<HTMLInputElement>(null);
  const [inputData, setInputData] = useState<any>({
    img: "",
    name: "",
    msg: "",
  });

  const buttonAllowed =
    inputData.img !== "" && inputData.name !== "" && inputData.msg !== "";

  const clear = () => {
    setInputData({ name: "", msg: "", img: "" });
    clearPhotoSelection();
  };

  const clearPhotoSelection = () => {
    if (photoRef.current != null) photoRef.current.value = "";
  };

  const onSubmitData = () => {
    if (buttonAllowed) {
      props.onSubmit(inputData);
      clear();
    }
  };

  const updateInputData = (key: string, value: string) => {
    setInputData((prevData: any) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const onUpload = () => {
    if (photoRef.current != null) {
      photoRef.current.click();
    }
  };

  const handlePhotoChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const url = URL.createObjectURL(event.target.files[0]);
      updateInputData("img", url);
    }
  };

  return (
    <Post>
      <div className="profile-img-content">
        <div className="profile-img" onClick={onUpload}>
          {inputData.img !== "" ? (
            <img src={inputData.img} alt="" />
          ) : (
            <Image />
          )}
        </div>
        <input
          ref={photoRef}
          type="file"
          onChange={handlePhotoChange}
          accept="image/*"
          hidden
        />
        {inputData.img !== "" && (
          <button className="delete-button" onClick={clearPhotoSelection}>
            <Trash />
          </button>
        )}
      </div>
      <input
        type="text"
        value={inputData.name}
        placeholder="Digite seu nome"
        onChange={(e) => updateInputData("name", e.target.value)}
      />
      <textarea
        rows={4}
        placeholder="Mensagem"
        value={inputData.msg}
        onChange={(e) => updateInputData("msg", e.target.value)}
      />
      <div className="group-buttons">
        <button data-testid="clear-button" onClick={clear}>
          Descartar
        </button>
        <button
          data-testid="submit-button"
          onClick={onSubmitData}
          className={buttonAllowed ? "active" : "no-active"}
        >
          Publicar
        </button>
      </div>
    </Post>
  );
};

export default NewPostComponent;
