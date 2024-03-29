import { useState } from "react";
import Context from "./Context";
import { PostProps } from "../types";

type ContextProviderProps = {
  children: React.ReactNode;
};

const posts = [  
  {
    id: "2024-03-29T16:11:47.197Z",
    name: "Nome do Usuário",
    message: "Loren nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
    image: "/public/photo-base.jpg"
  },
  {
    id: "2024-03-29T16:11:09.747Z",
    name: "Nome do Usuário",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis.",
    image: "/public/photo-base2.jpg"
  },
  {
    id: "2024-03-29T16:11:01.252Z",
    name: "Manuela Oliveira",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
    image: "/public/photo-base3.jpg"
  }
]

function ContextProvider({ children }: ContextProviderProps) {

  const [allPosts, setAllPosts] = useState<PostProps[]>(posts)


  const addPost = (post: PostProps) => {
    const updatedPosts = [...allPosts, post];
    const sortedPosts = updatedPosts.sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime());
    setAllPosts(sortedPosts)
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