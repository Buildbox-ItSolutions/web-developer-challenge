import React, { useContext } from "react";
import { Container } from "./styles";
import deletePost from "../../assets/imgs/deletePost.svg";
import { PostContext } from "../../context/PostContext";

interface IPost {
  id: string;
  name: string;
  content: string;
  image: string;
}



const Post = (props: IPost) => {
    const {post, setPost} = useContext(PostContext);

    function removePostItem() {
        const newArray = post.filter((itemPost) => itemPost.id !== props.id);
        setPost(newArray);
    }

    return (
        <Container>
            <img
                role="button"
                className="deletePost"
                src={deletePost}
                alt="Ícone de deleção de Post"
                onClick={removePostItem}
            />
            <div className="container-content">
                <div className="img-post">
                    <img className="photo-base" src={props.image} alt="Imagem selecionado pelo usuário no momento de criação do Post" />
                </div>
                <div className="content">
                    <p>{props.content}</p>
                    <span>Enviado por</span>
                    <small>{props.name}</small>
                </div>
            </div>
        </Container>
    );
};

export default Post;
