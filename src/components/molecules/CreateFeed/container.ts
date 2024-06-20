import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useFeedStore } from "../../../core/stores/feed";
import { IFeed } from "../../../core/stores/feed/types";

export const useCreateFeedContainer = () => {
  const createFeed = useFeedStore(store => store.createFeed);

  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const isPublishAvailable = !!name.trim() && !!message.trim() ? false : true;

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget?.value);

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.currentTarget?.value);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e?.currentTarget?.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        setImage(reader.result?.toString() || "");
      };
    }
  };

  const clearImage = () => setImage("");
  const clearFields = () => {
    setImage("");
    setName("");
    setMessage("");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const feed: IFeed = {
      id: uuidv4(),
      image,
      name: name.trim(),
      message: message.trim(),
    };

    createFeed(feed);
    clearFields();
  };

  return {
    onChangeName,
    onChangeMessage,
    onChangeImage,
    image,
    clearImage,
    onSubmit,
    isPublishAvailable,
    name,
    message,
    clearFields,
  };
};
