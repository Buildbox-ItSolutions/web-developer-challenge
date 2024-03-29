import { useState } from "react";
import Context from "./Context";
import { PostProps } from "../types";

type ContextProviderProps = {
  children: React.ReactNode;
};

const posts = [
  {
    id: "1",
    name: "Manuela Oliveira",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
  },
  {
    id: "2",
    name: "Nome do Usuário",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis.",
  },
  {
    id: "3",
    name: "Nome do Usuário",
    message: "Loren nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
  }
]

function ContextProvider({ children }: ContextProviderProps) {

  const [allPosts, setAllPosts] = useState<PostProps[]>(posts)

 
  const addPost = (post: PostProps) => {
    setAllPosts([...allPosts, post])
  }

  const values = {
    allPosts,
    addPost
  }
  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider