import { ReactNode } from "react";
import { CurrentImageProvider } from "./CurrentImage";
import { PostProvider } from "./Posts";

interface ProviderProps{
    children: ReactNode
}


const Providers = ({ children } : ProviderProps) => {
    return(
        <CurrentImageProvider>
            <PostProvider>
                { children }
            </PostProvider>
        </CurrentImageProvider>
    )
}


export default Providers