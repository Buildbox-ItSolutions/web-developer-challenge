import { Row } from "./styles";
import { FileImageInput, TrashButton } from "../../atoms";

interface PostUploadImageInputProps {
  onChange: (photo: string) => any;
  photo: string;
  onRemove: () => any;
}

export const PostUploadImageInput = ({
  onChange,
  onRemove,
  photo,
}: PostUploadImageInputProps) => {
  return (
    <Row>
      <FileImageInput
        photo={photo}
        onChange={(evt) => {
          const { files } = evt.target;
          if (files?.length) {
            onChange(URL.createObjectURL(files[0]));
          }
        }}
      />
      {photo ? (
        <TrashButton
          onClick={() => {
            onRemove();
          }}
        />
      ) : null}
    </Row>
  );
};
