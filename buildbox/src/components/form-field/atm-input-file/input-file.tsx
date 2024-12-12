import { InputHTMLAttributes, useRef } from "react";
import { ImageCard } from "../../atm-image/image.component";
import { HSeparator } from "../../utils/separator.component";
import {
  DivFlex,
  InputFileContainer,
  InputFileStyled,
  Landscape,
  Trash,
} from "./input-file.component.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onTakePicture: any;
  url: string;
}

export const InputFile: React.FunctionComponent<InputProps> = (props) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (!hiddenFileInput.current) {
      return;
    }
    hiddenFileInput.current.click();
  };

  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    const objectUrl = URL.createObjectURL(fileUploaded);
    props.onTakePicture(objectUrl);
  };

  return (
    <DivFlex>
      <InputFileContainer onClick={handleClick}>
        {props.url ? (
            <ImageCard src={props.url} />
        ) : (
          <Landscape />
        )}
        <InputFileStyled
          type="file"
          {...props}
          ref={hiddenFileInput}
          onChange={handleChange}
        />
      </InputFileContainer>
      {props.url && (
        <>
        <HSeparator/> 
        <Trash
          size={24}
          onClick={() => {
            props.onTakePicture()
          }}
        />
        </>
      )}
    </DivFlex>
  );
};
