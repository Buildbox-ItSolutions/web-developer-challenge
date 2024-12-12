import { createContext, useState } from "react";
import { CraftContextProps, CraftContextType } from "./types";

const initial = {
  author: "",
  setAuthor: () => {},
  message: "",
  setMessage: () => {},
  image: "",
  setImage: () => {},
};

const CraftContext = createContext<CraftContextType>(initial);

const CraftContextProvider = ({ children }: CraftContextProps) => {
  const [author, setAuthor] = useState(initial.author);
  const [message, setMessage] = useState(initial.message);
  const [image, setImage] = useState(initial.image);

  return (
    <CraftContext.Provider
      value={{
        author,
        setAuthor,
        message,
        setMessage,
        image,
        setImage,
      }}
    >
      {children}
    </CraftContext.Provider>
  );
};

export { CraftContext, CraftContextProvider };
