import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IPostProvidersProps {
    children: ReactNode;
}

export interface IPostContext {
    listPost: any[]
    setListPost:  Dispatch<SetStateAction<any>>
}

export const PostContext = createContext<IPostContext>({} as IPostContext); 

export const TechProvider = ({ children }: IPostProvidersProps) => {

    const [listPost, setListPost] = useState<any[]>([])

    return (
        <PostContext.Provider value={{
            listPost,
            setListPost
        }}>
            {children}
        </PostContext.Provider>
    )
}