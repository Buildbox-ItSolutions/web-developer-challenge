import { ReactNode } from "react";
import { CurrentImageProvider } from "./CurrentImage";
import { ModalEditProvider } from "./ModalEditPost";
import { ModalDeleteProvider } from "./ModelDeletePost";
import { PostProvider } from "./Posts";

interface ProviderProps{
    children: ReactNode
}


const Providers = ({ children } : ProviderProps) => {
    return(
        <CurrentImageProvider>
            <ModalDeleteProvider>
                <ModalEditProvider>
                    <PostProvider>
                        { children }
                    </PostProvider>
                </ModalEditProvider>
            </ModalDeleteProvider>
        </CurrentImageProvider>
    )
}


export default Providers