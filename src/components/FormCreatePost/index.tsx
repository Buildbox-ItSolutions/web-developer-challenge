import useFormCreate from "./hooks/useFormCreate";
import { ContainerFormPost, GridFormPost, FormPost } from "../../styles";
import Buttons from "./containers/Buttons";
import Fields from "./containers/Fields";
import UploadImg from "./containers/UploadImg";

export default function FormCreatePost() {
  const { handleSubmitPost } = useFormCreate();
  return (
    <ContainerFormPost>
      <GridFormPost>
        <UploadImg />
        <FormPost onSubmit={handleSubmitPost}>
          <Fields />
          <Buttons />
        </FormPost>
      </GridFormPost>
    </ContainerFormPost>
  );
}
