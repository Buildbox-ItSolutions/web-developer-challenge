import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { IPostAdd } from "../../../infra/entities/post";
import { convertFileToBase64 } from "../../../utils/base64";
import { PostAdd } from "../../components/posts/post-add";
import { PostContext } from "../../contexts/post";

const initialPost: IPostAdd = {
  image: "",
  message: "",
  name: "",
};

export function Add() {
  const postContext = useContext(PostContext);

  const [post, setPost] = useState<IPostAdd>(initialPost);
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleOnChangeImage = async ({ currentTarget }: any) => {
    try {
      const file = currentTarget.files?.[0];
      const image = await convertFileToBase64(file);
      setPost({ ...post, image });
    } catch (error: any) {
      console.log(error?.message);
      setImagePreview(post.image);
    }
  };

  const handleOnRemoveImage = () => {
    setPost((prev) => ({ ...prev, image: "" }));
  };

  useEffect(() => {
    setImagePreview(post.image);
  }, [post.image]);

  const handleOnDiscard = () => {
    setPost(initialPost);
  };

  const addPublish = useCallback(
    async (post: IPostAdd) => {
      postContext?.setFetching(true);
      await postContext?.addPost(post);
      handleOnDiscard();
      postContext?.setFetching(false);
    },
    [postContext]
  );

  const handleOnPublish = () => {
    addPublish(post);
  };

  const isValidPost = useMemo(
    () =>
      !!post.image && !!post.message && !!post.name && !postContext?.fetching,
    [post, postContext?.fetching]
  );

  return (
    <PostAdd
      handleOnChangeImage={handleOnChangeImage}
      handleOnRemoveImage={handleOnRemoveImage}
      handleOnPublish={handleOnPublish}
      handleOnDiscard={handleOnDiscard}
      imagePreview={imagePreview}
      post={post}
      setPost={setPost}
      isValidPost={isValidPost}
    />
  );
}
