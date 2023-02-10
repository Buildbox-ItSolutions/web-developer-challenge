import React, { createContext, ReactNode, useState } from "react";

export interface IPostProps {
  id: string;
  name: string;
  content: string;
  img: string;
}

interface IPostContextTypes {
  post: IPostProps[];
  setPost: (value: IPostProps[]) => void;
}

const initialValue = {
    post:[
        {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            name: "Manuela Oliveira",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
            img: "src/assets/imgs/photoBase.jpg"
        },
        {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            name: "Manuela Oliveira",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis.",
            img: "src/assets/imgs/photoBase2.jpg"
        },
    ],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setPost: () => {}
};


export const PostContext = createContext<IPostContextTypes>(initialValue);

interface IPostContextProps {
  children: ReactNode
}

export const PostContextProvider = (props: IPostContextProps) => {
    const [post, setPost] = useState<IPostProps[]>(initialValue.post);
    return (
        <PostContext.Provider value={{post, setPost}}>
            {props.children}
        </PostContext.Provider>
    );
};
