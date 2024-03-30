import * as S from "./styles";

function Photo({ image }: { image: string }) {
  return (
    <S.Upload>
      {image && image.length > 0 ? <img src={image} /> : <></>}
    </S.Upload>
  );
}

export default Photo;
