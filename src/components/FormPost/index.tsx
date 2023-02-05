import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Container } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostTypes } from "../../types/PostTypes";
import { FormPostSchema } from "../../validations/FormPost";
import { v4 } from "uuid";
import PhotoUpload from "../../assets/photo-upload.svg";
import Trash from "../../assets/trash.svg";

interface FormPostProps {
  setPosts: Dispatch<SetStateAction<PostTypes[]>>;
  posts: PostTypes[];
}

export const FormPost = ({ setPosts, posts }: FormPostProps) => {
  const [file, setFile] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
    setValue,
  } = useForm<PostTypes>({
    resolver: yupResolver(FormPostSchema),
  });

  const onSubmit = (data: PostTypes) => {
    data.id = v4();
    setPosts([...posts, data]);
    clearForm();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files as FileList;
    const url = URL.createObjectURL(file?.[0]);
    setFile(url);
    setValue("fileUrl", url, { shouldValidate: true });
  };

  const removeFile = () => {
    setValue("fileUrl", "", { shouldValidate: true });
    setFile("");
  };

  const clearForm = () => {
    reset();
    removeFile();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="file"
          className="Inputfile"
          type="file"
          onChange={handleFileChange}
        />

        <div className="ImageUpload">
          {file ? (
            <div className="ImageContainer">
              <label className="ImageUpload" htmlFor="file">
                <img
                  className="Image"
                  src={file}
                  alt="Preview da imagem de upload"
                />
              </label>
              <img
                onClick={removeFile}
                src={Trash}
                className="IconRemove"
                alt="Ícone de remover imagem"
              />
            </div>
          ) : (
            <label className="ImageUpload" htmlFor="file">
              <img
                className="Image"
                src={PhotoUpload}
                alt="Imagem de upload "
              />
            </label>
          )}
        </div>

        <input placeholder="Digite seu nome" {...register("name")} />
        <textarea placeholder="Mensagem" {...register("post")} />

        <section className="Buttons">
          <button className="Clear" onClick={clearForm}>
            Descartar
          </button>
          <Button active={isValid}>Publicar</Button>
        </section>
      </form>
    </Container>
  );
};
