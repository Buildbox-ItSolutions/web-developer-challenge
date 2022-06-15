import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

import NoImage from "../../assets/images/no-image.png"

interface ProviderProps {
  children: ReactNode;
}

interface IPosts {
  name: string;
  message: string;
  profileImage: string;
  id: string;
}

interface MessageData {
  profileImage: string;
  showTrash: boolean;
  posts: IPosts[];

  setProfileImage: React.Dispatch<React.SetStateAction<string>>;
  setShowTrash: React.Dispatch<React.SetStateAction<boolean>>;
  setPosts: React.Dispatch<React.SetStateAction<IPosts[]>>;
  removeImage: () => void;
  resetForm: () => void;
  publish: (newPost: IPosts) => void;
}

const DataContext = createContext<MessageData>({} as MessageData);

export const DataProvider = ({ children }: ProviderProps) => {
  const [profileImage, setProfileImage] = useState(NoImage);
  const [showTrash, setShowTrash] = useState(false);
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    if (profileImage !== NoImage) {
      setShowTrash(true);
    } else {
      removeImage();
    }
  }, [profileImage]);

  const removeImage = () => {
    setProfileImage(NoImage);

    const image = document.querySelector("#userImage") as HTMLScriptElement;
    image.classList.remove("updatedImage")

    setShowTrash(false);
  }

  const resetForm = () => {
    setProfileImage(NoImage);

    const name = document.querySelector("input[type=text]") as HTMLInputElement;
    name.value = "";

    const message = document.querySelector("textarea") as HTMLTextAreaElement;
    message.value = "";
  }

  const publish = (newPost: IPosts) => {
    setPosts([newPost, ...posts])

    const thePost = document.querySelector("textarea") as HTMLTextAreaElement;
    thePost.scrollIntoView();
  }

  return (
    <DataContext.Provider
      value={{
        profileImage,
        setProfileImage,
        showTrash,
        setShowTrash,
        posts,
        setPosts,
        removeImage,
        resetForm,
        publish
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);