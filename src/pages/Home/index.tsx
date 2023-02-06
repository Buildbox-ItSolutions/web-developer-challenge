import React, { useEffect, useState } from "react";
import { Feed, Header } from "../../components";
import PostForm from "../../components/PostForm";
import { useFormContext } from "../../store";
import { usePostContext } from "../../store/PostContext";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet";

import { Container } from "./styles";
import { getPosts } from "../../services/post";

const Home: React.FC = () => {
  const [buttonStatus, setButtonStatus] = useState(false);

  const { newMessage, newName, filePreview, clearForm } = useFormContext();
  const { handlePostNewItem, setPostsData } = usePostContext();

  useEffect(() => {
    const posts = getPosts();
    setPostsData(posts);
  }, []);

  useEffect(() => {
    if (validForm()) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  }, [newMessage, newName, filePreview]);

  const validForm = () => {
    return newMessage.length > 0 && newName.length > 0 && filePreview;
  };

  const handleClickPublish = () => {
    if (validForm()) {
      handlePostNewItem({
        author: newName,
        imgSource: filePreview as string,
        message: newMessage,
        id: uuidv4(),
      });

      clearForm();
    }
  };

  return (
    <Container buttonStatus={buttonStatus}>
      <Helmet>
        <title>BuildBox | Posts</title>
      </Helmet>

      <Header />

      <div className="post-form">
        <PostForm />

        <div className="buttons-div">
          <p onClick={clearForm}>Descartar</p>
          <button onClick={handleClickPublish}>Publicar</button>
        </div>
      </div>

      <Feed />
    </Container>
  );
};

export default Home;
