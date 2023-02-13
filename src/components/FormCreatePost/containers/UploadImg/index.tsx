import Img from "../../../../assets/img/img.png";
import trash from "../../../../assets/img/trash.png";
import useFormCreate from "../../hooks/useFormCreate";
import {
  RemoveImgForm,
  GridImgPost,
  InputFilePost,
  InputLabelPost,
  ButtonRemoveImgPost,
  ImgPostForm,
} from "../../../../styles";

export default function UploadImg() {
  const { handleChangeFiledPost, removeFileImg, state } =
    useFormCreate();

  return (
    <GridImgPost>
      {state.fields.valueImg ? (
        <ImgPostForm
          width={88}
          height={88}
          src={state.fileImg}
          alt={state.fileImg}
        />
      ) : (
        <RemoveImgForm src={Img} alt={Img} />
      )}

      <InputLabelPost htmlFor="file-selection">
        <InputFilePost
          type="file"
          id="file-selection"
          name="valueImg"
          value={state.fields.valueImg}
          onChange={handleChangeFiledPost}
        />
      </InputLabelPost>

      {state.fields.valueImg && (
        <ButtonRemoveImgPost onClick={removeFileImg}>
          <RemoveImgForm src={trash} alt={trash} />
        </ButtonRemoveImgPost>
      )}
    </GridImgPost>
  );
}
