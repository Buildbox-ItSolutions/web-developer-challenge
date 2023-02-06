import { Image ,ImageContainer} from "./styles";

interface PostUploadImageInputProps {
  photo: string;
}

export const PostImage = ({ photo }: PostUploadImageInputProps) => {
  return (
    <ImageContainer>
      <Image src={photo} />
    </ImageContainer>
  );
};
