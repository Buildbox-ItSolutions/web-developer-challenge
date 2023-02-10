import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, ReactNode, useRef, useState } from "react";
import { createContext } from "react";

interface Post {
  message: string;
  author: string;
  fileImg: string;
  id: string;
}

interface FildsPost {
  message: string;
  author: string;
}

interface ElementsChildren {
  children?: ReactNode;
}

export const createContextGlobal = createContext<any>({});

export default function GlobalContext({ children }: ElementsChildren) {
  const [posts, setPosts] = useState<Post[]>([]);

  const [stateFileds, setStateFields] = useState<FildsPost>({
    message: "",
    author: "",
  });

  const [valueImg, setValueImg] = useState<string>("");
  const [fileImg, setFileImg] = useState<string>("");

  const handleChangeFiledPost = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStateFields({ ...stateFileds, [e.target.name]: e.target.value });
  };

  const handleOploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    setValueImg(e.target.value);

    if (e.target.files) {
      setFileImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeFileImg = () => setValueImg("");

  const handleSubmitPost = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        id: uuidv4(),
        author: stateFileds.author,
        message: stateFileds.message,
        fileImg: fileImg,
      },
    ]);

    setValueImg("");
    setStateFields({ message: "", author: "" });
  };

  const handleClickRemovePost = (id: string) =>
    setPosts(posts.filter((post) => post.id !== id));

  return (
    <createContextGlobal.Provider
      value={{
        handleChangeFiledPost,
        setStateFields,
        handleOploadImg,
        removeFileImg,
        handleSubmitPost,
        handleClickRemovePost,
        posts,
        fileImg,
        valueImg,
        stateFileds,
      }}
    >
      {children}
    </createContextGlobal.Provider>
  );
}
