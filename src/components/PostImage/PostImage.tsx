import { ImageContainer } from "./styles";
import placeholder from "src/assets/images/image-placeholder.png";

interface PostImageProps {
  image?: string;
  alt?: string;
};

const PostImage: React.FC<PostImageProps> = ({ image, alt }) => {
  return (
    <ImageContainer>
      <img
        src={image || placeholder}
        alt={alt || 'imagem vazia'}
      />
    </ImageContainer>
  );
};

export default PostImage;
