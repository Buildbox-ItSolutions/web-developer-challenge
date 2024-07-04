import { Button } from "../buttons";
import { ImageInput, Input, TextArea } from "../inputs";
import { useFormModel } from "./model";
import { Actions, FormContainer } from "./style";

export const FormView = ({
  handleSubmit,
  register,
  onSubmit,
  errors,
}: ReturnType<typeof useFormModel>) => {
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <ImageInput />
      </div>
      <div style={{ gap: "8px", width: "100%" }}>
        <Input
          type="text"
          placeholder="Name"
          {...register("name")}
          error={errors.name}
          errorMessage={errors.name?.message?.toString()}
        />
        <TextArea
          placeholder="Message"
          {...register("message")}
          error={errors.message}
          errorMessage={errors.message?.message?.toString()}
        />
      </div>
      <Actions>
        <Button noBg>Descartar</Button>
        <Button>Publicar</Button>
      </Actions>
    </FormContainer>
  );
};
