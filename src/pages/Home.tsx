import { useState } from "react";
import { HomeBody } from "../ui/components/home/HomeBody";
import { HomeLayout } from "../ui/components/home/HomeLayout";
import avatar1x from "../ui/assets/photo-base.png";
import { usePosts } from "../reducers/usePosts";
import { TopBar } from "../ui/components/home/TopBar";
import { InputElement } from "../ui/components/home/InputElement";
import { FeedTitle } from "../ui/components/home/FeedTitle";
import { PublishedPost } from "../ui/components/home/PublishedPost";

export const HomePage = () => {
  //States

  const [avatar, setAvatar] = useState<string>(avatar1x);
  const [messageName, setNameMessage] = useState<string>("");
  const [messagePost, setPostMessage] = useState<string>("");

  //Reducer usePosts.
  //usePosts Reducer.

  const [posts, dispatch] = usePosts();

  //Função de inserção de imagem na seção de entrada de dados.
  //Image insertion function in the data input section.

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  //Função de Remoção de imagem na seção de entrada de dados.
  //Image Removal function in the data input section.

  const handleTrash = () => {
    setAvatar(avatar1x);
  };

  //Função utilizada para capturar o nome inserido.
  //Function used to capture the inserted name.

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameMessage(event.target.value);
  };

  //Função utilizada para capturar o post inserido.
  //Function used to capture the inserted post.

  const handlePostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostMessage(event.target.value);
  };

  //Função de Remoção do nome e post na seção de entrada de dados.
  //Name and post removal function in data entry section.

  const handleDiscart = () => {
    setNameMessage("");
    setPostMessage("");
  };

  //Função utilizada para inserir novo post (image,nome e mensagem).
  //Function used to insert new post (image, name and message).

  const handleAddPost = () => {
    if (messageName && messagePost && avatar !== avatar1x) {
      dispatch({
        type: "ADD",
        payload: {
          assigned: messageName,
          message: messagePost,
          image: avatar,
        },
      });
      handleDiscart();
    }
  };

  //Função utilizada para deletar um post (identificação por id).
  //Function used to delete a post (identification by id).

  const handleDeletePost = (id: string) => {
    dispatch({
      type: "DEL",
      payload: {
        id,
      },
    });
  };

  return (
    <HomeLayout>
      <TopBar />
      <HomeBody>
        <InputElement
          avatar={avatar}
          addPost={handleAddPost}
          change={handleChange}
          discart={handleDiscart}
          nameChange={handleNameChange}
          postChange={handlePostChange}
          trash={handleTrash}
          name={messageName}
          post={messagePost}
        />
        <FeedTitle />
        <PublishedPost posts={posts} deletePost={handleDeletePost} />
      </HomeBody>
    </HomeLayout>
  );
};
