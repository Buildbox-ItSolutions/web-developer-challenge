import PictureContainerUi from "../../ui/containers/picture.container.ui.tsx";
import HiddenInputUi from "../../ui/forms/hidden.input.ui.tsx";
import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import PlaceholderImg from "../../ui/img/placeholder.img.tsx";
import PictureImgUi from "../../ui/img/picture.img.ui.tsx";
import HelperTextUi from "../../ui/forms/helper-text.ui.tsx";
import PictureFormContainerUi from "../../ui/containers/picture-form.container.ui.ts";
import FormIconImgContainerUi from "../../ui/containers/form-icon-img.container.ui.ts";
import IconButtonImgUi from "../../ui/img/icon-button.img.ui.tsx";
import TrashIconContainerUi from "../../ui/containers/trash-icon.container.ui.ts";

type Props = {
  error?: boolean;
  helperText?: string;
  imageURL?: string;
  clearImg?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

function FormPicture({
  error,
  helperText,
  imageURL,
  clearImg,
  ...props
}: Props, formRef: LegacyRef<HTMLInputElement>) {
  const id = String(Math.random());

  const handleClick = () => {
    const input = document.getElementById(id);
    input?.click();
  }


  return (
    <PictureFormContainerUi>
      <FormIconImgContainerUi>
        <PictureContainerUi onClick={ handleClick } adding>
          <HiddenInputUi
            id={ id }
            type="file"
            accept="image/*"
            ref={ formRef }
            { ...props }
          />
          {
            imageURL ?
              <PictureImgUi src={ imageURL } alt="image"/> :
              <PlaceholderImg src='/img/image-placeholder.svg' alt="image"/>
          }
        </PictureContainerUi>
        { imageURL && (
          <TrashIconContainerUi>
            <IconButtonImgUi
              src="/img/trash.svg"
              alt="trash"
              onClick={clearImg}
            />
          </TrashIconContainerUi>
        ) }
      </FormIconImgContainerUi>
      <HelperTextUi variant={ error ? 'error' : undefined }>{ helperText }</HelperTextUi>
    </PictureFormContainerUi>
  )
}

export default forwardRef(FormPicture);
