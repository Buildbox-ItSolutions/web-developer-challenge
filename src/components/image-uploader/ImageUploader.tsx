import { Image, Trash } from "lucide-react";
import { useFormContext } from "react-hook-form";
import {
  Preview,
  TrashButton,
  AddImageLabel,
  AddImageInput,
  Container,
} from "./styles";

function ImageUploader() {
  const { resetField, watch, register } = useFormContext();
  const currentImage = watch("image");

  return (
    <Container>
      {currentImage?.length ? (
        <>
          <Preview src={URL.createObjectURL(currentImage[0])} />
          <TrashButton variant="icon" onClick={() => resetField("image")}>
            <Trash size={20} strokeWidth={1} />
          </TrashButton>
        </>
      ) : (
        <>
          <AddImageLabel htmlFor="image">
            <Image color="#9f9f9f" strokeWidth={1} />
          </AddImageLabel>
          <AddImageInput
            id="image"
            {...register("image", { required: true })}
            type="file"
            accept="image/*"
          />
        </>
      )}
    </Container>
  );
}

export default ImageUploader;
