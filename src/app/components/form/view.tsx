import { Controller } from "react-hook-form";
import { Avatar } from "../avatar";
import { Button, IconButton } from "../buttons";
import { ImageInput, Input, TextArea } from "../inputs";
import { useFormModel } from "./model";
import { Actions, FormContainer } from "./style";
import { PiTrashSimpleLight } from "react-icons/pi";

export const FormView = ({
  handleSubmit,
  control,
  onSubmit,
  errors,
  isValid,
  handleImageUpload,
  avatarImage,
  resetAvatar,
  resetForm,
}: ReturnType<typeof useFormModel>) => {
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        {avatarImage && (
          <div style={{ display: "flex" }}>
            <Avatar url={avatarImage} />
            <div
              style={{
                height: "88px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onClick={resetAvatar}
            >
              <IconButton>
                <PiTrashSimpleLight />
              </IconButton>
            </div>
          </div>
        )}
        {!avatarImage && <ImageInput onChange={handleImageUpload} />}
      </div>
      <div style={{ gap: "8px", width: "100%" }}>
        <Controller
          name={`name`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              placeholder="Name"
              error={errors.name}
              errorMessage={errors.name?.message?.toString()}
            />
          )}
        />
        <Controller
          name={`message`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextArea
              {...field}
              placeholder="Message"
              error={errors.message}
              errorMessage={errors.message?.message?.toString()}
            />
          )}
        />
      </div>
      <Actions>
        <Button noBg onClick={resetForm}>
          Descartar
        </Button>
        <Button disabled={!isValid}>Publicar</Button>
      </Actions>
    </FormContainer>
  );
};
