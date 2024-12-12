import * as S from "./Form.styled";
import Picture from "./form-components/Picture/Picture.component";
import Button from "./form-components/Button/Button.component";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { DataProps } from "../Content/Content";
import { v4 as uuidv4 } from "uuid";

const createCardSchema = z.object({
  picture: z
    .instanceof(FileList)
    .refine((file) => file[0], {
      message: "Você precisa selecionar uma imagem",
    })
    .refine((file) => file[0]?.size <= 5 * 1024 * 1024, {
      message: "o aquivo precisa ter no máximo 2000MB",
    }),
  name: z.string().refine((n) => n.length >= 2, {
    message: "Preencha este campo com no minímo 2 caracter",
  }),
  description: z.string().refine((m) => m.length >= 6, {
    message: "Preencha este campo com no minímo 6 caracter",
  }),
});

type createCardProps = z.infer<typeof createCardSchema>;
const Form = ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    resetField,
    formState: { isValid, errors },
  } = useForm<createCardProps>({
    resolver: zodResolver(createCardSchema),
  });

  const [valid, setValid] = useState(isValid);
  const { ref, onChange, onBlur, name } = register("picture");
  const pictureInput = watch("picture");

  const setItemLocalStorage = (item: DataProps[], newData: DataProps) => {
    localStorage.setItem("card", JSON.stringify([...item, newData]));
  };

  const imageToBase64 = useCallback((img: FileList) => {
    const file = img[0];

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  }, []);

  const createCard = async (data: createCardProps) => {
    const id = uuidv4();

    const card = localStorage.getItem("card");
    const image = await imageToBase64(data.picture);

    const newData = {
      ...data,
      picture: typeof image === "string" ? image : null,
      id,
    };

    if (card) {
      const prevCard: DataProps[] = JSON.parse(card);
      setItemLocalStorage(prevCard, newData);

      setData((prevData) => [...prevData, newData]);
    } else {
      localStorage.setItem("card", JSON.stringify([newData]));
      const card = localStorage.getItem("card");

      if (card) {
        const newCard: DataProps[] = JSON.parse(card);
        setData((prevData) => [...prevData, ...newCard]);
      }
    }

    emptyInputs();
  };

  const emptyPicture: React.MouseEventHandler = (e) => {
    e.preventDefault();
    resetField("picture");
  };

  const emptyInputs = () => {
    reset();
  };

  useEffect(() => {
    setValid(isValid);
  }, [isValid]);

  return (
    <S.FormContainer onSubmit={handleSubmit(createCard)}>
      <Picture
        id="picture"
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        picture={pictureInput}
        type="file"
        accept=".jpg,.png"
        setValue={emptyPicture}
        error={errors.picture?.message}
      />

      <div>
        <S.InputName
          type="text"
          {...register("name")}
          placeholder="Digite seu nome"
        />
        {errors.name && <S.Erro>{errors.name.message}</S.Erro>}
      </div>

      <div>
        <S.InputMessage {...register("description")} placeholder="Menssagem" />
        {errors.description && <S.Erro>{errors.description.message}</S.Erro>}
      </div>

      <S.BtnBox>
        <span onClick={emptyInputs}>descartar</span>

        <Button valid={!valid}>Publicar</Button>
      </S.BtnBox>
    </S.FormContainer>
  );
};

export default Form;
