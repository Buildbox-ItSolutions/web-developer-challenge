import { Dispatch, SetStateAction } from "react";
import { Container } from "./styles";
import { PostTypes } from "../../types/PostTypes";
import RemoveIcon from "../../assets/delete.svg";

interface CardProps {
  setPosts: Dispatch<SetStateAction<PostTypes[]>>;
  image: string;
  post: string;
  name: string;
  posts: PostTypes[];
  id: string;
}

export const Card = ({ setPosts, image, name, post, posts, id }: CardProps) => {
  const removePost = () => {
    const filterPosts = posts.filter((item) => {
      return item.id !== id;
    });

    setPosts(filterPosts);
  };

  return (
    <Container>
      <div>
        <img
          onClick={removePost}
          className="RemoveIcon"
          src={RemoveIcon}
          alt="Ícone de remover postagem"
        />
      </div>
      <div className="Post">
        <img className="ImagePost" src={image} alt="Imagem da postagem" />
        <div>
          <p>{post}</p>
          <p>Enviado por</p>
          <p>{name}</p>
        </div>
      </div>
    </Container>
  );
};
