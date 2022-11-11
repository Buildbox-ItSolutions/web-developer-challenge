import { Icon } from "@iconify/react";
import React from "react";
import { usePost } from "../../context/postContext";
import { IPostsIndex } from "../../interfaces/post.interface";
import { ContainerPosts, PostContainer } from "./post.style";

function Posts() {
  const { post, onDeletePost } = usePost();
  return (
    <ContainerPosts>
      <p>Feed</p>
      {post.length === 0 ? (
        <p>Nenhum post</p>
      ) : (
        post.map((post: any) => {
          return (
            <PostContainer key={post.id}>
              <Icon
                icon="ant-design:close-outlined"
                className="icon"
                onClick={() => onDeletePost(post.id)}
              />

              <img src={post.img} alt="avatar" />

              <div>
                <p className="message">{post.message}</p>
                <p className="sendBy">Enviado por</p>
                <p>{post.name}</p>
              </div>
            </PostContainer>
          );
        })
      )}
    </ContainerPosts>
  );
}

export default Posts;
