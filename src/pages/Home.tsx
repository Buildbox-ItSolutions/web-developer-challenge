import { useState } from "react";
import { HomeBody, HomeLayout } from "../ui/partials/home/HomeLayout";
import avatar1x from "../ui/assets/photo-base.png";
import { usePosts } from "../reducers/posts";
import { TopBar } from "../ui/components/home/TopBar";
import { InputElement } from "../ui/components/home/InputElement";
import { FeedTitle } from "../ui/components/home/FeedTitle";
import { PublishedPost } from "../ui/components/home/PublishedPost";

export const HomePage = () => {
  const [avatar, setAvatar] = useState<string>(avatar1x);
  const [messageName, setNameMessage] = useState<string>("");
  const [messagePost, setPostMessage] = useState<string>("");

  const [posts, dispatch] = usePosts();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleTrash = () => {
    setAvatar(avatar1x);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameMessage(event.target.value);
  };

  const handlePostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostMessage(event.target.value);
  };

  const handleDiscart = () => {
    setNameMessage("");
    setPostMessage("");
  };

  const handleAddPost = () => {
    if (messageName && messagePost) {
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
