import { ReactNode } from "react";
import { CurrentImageProvider } from "./CurrentImage";
import { ModalDeleteProvider } from "./ModelDeletePost";
import { PostProvider } from "./Posts";

interface ProviderProps{
    children: ReactNode
}


const Providers = ({ children } : ProviderProps) => {
    return(
        <CurrentImageProvider>
            <ModalDeleteProvider>
                <PostProvider>
                    { children }
                </PostProvider>
            </ModalDeleteProvider>
        </CurrentImageProvider>
    )
}


export default Providers