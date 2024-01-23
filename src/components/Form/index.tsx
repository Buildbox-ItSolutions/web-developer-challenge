import * as React from "react";
import * as Form from "./form.style";
import PlaceholderImage from "../../assets/image.svg";
import TrashIcon from "../../assets/trash.svg?react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPost } from "../../types/post.types";

const Forms: React.FunctionComponent = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState:{isValid}
  } = useForm<IPost>();

  const onSubmit: SubmitHandler<IPost> = (data) => {
    const id = (+new Date()).toString(36);
    const body = { ...data, id: id };
    alert(JSON.stringify(body))
  };

  async function handleAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return;

    const imageURL = URL.createObjectURL(e.target.files[0]);

    setValue('image',imageURL)

    setSelectedImage(imageURL);
  }

  function resetAvatar() {
    setSelectedImage(null);
    setValue('image',null)
  }

  function resetForm(){
    resetAvatar()
    reset()

  }
  return (
    <>
      <Form.Container 
      onSubmit={handleSubmit(onSubmit)}
      >
        <Form.AvatarLabel htmlFor="avatar-field">
          <Form.AvatarWrapper
            $hasImage={!!selectedImage}
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

        <Form.Input
          {...register("createdBy",  { required: true })}
          type="text"
          name="createdBy"
          placeholder="Digite seu nome"
        />

        <Form.Input
          {...register("message", { required: true })}
          as="textarea"
          type="text"
          name="message"
          placeholder="Mensagem"
          rows={5}
        />

        <Form.ActionsWrapper>
          <Form.Button type="button" onClick={resetForm} className="discard">Descartar</Form.Button>
          <Form.Button disabled={!isValid} type="submit" className="publish">
            Publicar
          </Form.Button>
        </Form.ActionsWrapper>
      </Form.Container>
    </>
  );
};

export default Forms;
