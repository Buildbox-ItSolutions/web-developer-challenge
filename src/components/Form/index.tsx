import * as React from "react";
import * as Form from "./form.style";
import PlaceholderImage from "../../assets/image.svg";
import TrashIcon from "../../assets/trash.svg?react";

const Forms: React.FunctionComponent = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  async function handleAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return;

    const imageURL = URL.createObjectURL(e.target.files[0]);

    setSelectedImage(imageURL);
  }

  function resetAvatar() {
    setSelectedImage(null);
  }
  return (
    <>
      <Form.Container>
        <Form.AvatarLabel htmlFor="avatar-field">
          <Form.AvatarWrapper
            hasImage={!!selectedImage}
            src={selectedImage || PlaceholderImage}
          />
          {!!selectedImage && <TrashIcon onClick={resetAvatar} />}
        </Form.AvatarLabel>
        <Form.FileInput
          accept=".jpg, .jpeg, .png"
          id="avatar-field"
          name="image"
          type="file"
          onChange={handleAvatar}
        />

        <Form.Input type="text" name="name" placeholder="Digite seu nome" />

        <Form.Input
          as="textarea"
          type="text"
          name="name"
          placeholder="Mensagem"
          rows={5}
        />

        <Form.ActionsWrapper>
          <Form.Button className="discard">Descartar</Form.Button>
          <Form.Button className="publish">Publicar</Form.Button>
        </Form.ActionsWrapper>
      </Form.Container>
    </>
  );
};

export default Forms;
