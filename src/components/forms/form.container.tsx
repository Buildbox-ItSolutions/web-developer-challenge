import CardUi from "../../ui/cards/card.ui.tsx";
import FormPicture from "../pictures/form.picture.tsx";
import ButtonContainerUi from "../../ui/containers/button.container.ui.tsx";
import ButtonUi from "../../ui/buttons/button.ui.tsx";
import FormContainerUi from "../../ui/containers/form.container.ui.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import dataSchema from "../../schema/data.schema.ts";
import Input from "./input.tsx";
import Textarea from "./textarea.tsx";
import useData from "../../hooks/use-data.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import DataType from "../../types/data.type.ts";

export default function FormContainer() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, },
    setValue,
    watch,
  } = useForm<DataType>({
    defaultValues: {
      name: '',
      message: '',
      imgUrl: ''
    },
    resolver: zodResolver(dataSchema)
  });

  const { addData } = useData();

  const onSubmit: SubmitHandler<DataType> = (data) => {
    addData(data);
    reset();
  }

  return (
    <FormContainerUi
      noValidate
      onSubmit={ handleSubmit(onSubmit) }
    >
      <CardUi>
        <FormPicture
          error={ !!errors.imgUrl }
          helperText={ errors.imgUrl?.message }
          { ...register('imgUrl') }
          imageURL={ watch('imgUrl') }
          clearImg={ () => reset({ imgUrl: '' }) }
          onChange={
            (event) => setValue('imgUrl', URL.createObjectURL(event?.target?.files?.[0]!))
          }
        />
        <Input
          error={ !!errors.name }
          helperText={ errors.name?.message }
          placeholder="Digite seu nome"
          { ...register('name') }
        />
        <Textarea
          error={ !!errors.message }
          helperText={ errors.message?.message }
          placeholder="Mensagem"
          { ...register('message') }
        />
        <ButtonContainerUi>
          <ButtonUi
            variant="link"
            type="button"
            onClick={ () => reset() }
          >
            Descartar
          </ButtonUi>
          <ButtonUi
            variant="primary"
            type="submit"
            disabled={ !watch('imgUrl') || !watch('name') || !watch('message') }
          >
            Publicar
          </ButtonUi>
        </ButtonContainerUi>
      </CardUi>
    </FormContainerUi>
  )
}