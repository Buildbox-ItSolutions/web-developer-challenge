import { createContext, ReactNode, useEffect, useState } from "react";
import { Posts } from "../interfaces/interface";

type AuthContextData = {
    posts:Posts[]
    handlesave: (posts:Posts[]) => void
    removePost: (i:number) => void
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);


export  function AuthProvider({ children }: AuthProviderProps){
    const [posts , setPosts] = useState<Posts[]>([])

    const handlesave = async (posts:any) => {
        setPosts(Prev => [...Prev, posts]) 
    }
    
    
    const removePost = async (i:number) => {
        let filteredArray = posts.filter((item, index) => index !== i);
        setPosts(filteredArray)      
    }

    useEffect(() => {
      console.log('UseEffet effected');
    },[posts])


    return(
        <AuthContext.Provider 
        value={{
            posts,
            handlesave,
            removePost
            }}>
            {children}
        </AuthContext.Provider>
    )
}