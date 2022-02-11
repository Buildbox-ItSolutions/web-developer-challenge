import { createContext, ReactNode,  useState } from "react";

interface CurrentImageProviderProps{
    children:ReactNode
}
interface CurrentImageProviderData{
    currentImage: string
    changeCurrentImage:(currentImage:string) => void
}

export const CurrentImageContext = createContext <CurrentImageProviderData>({} as CurrentImageProviderData)

export const CurrentImageProvider = ({ children }: CurrentImageProviderProps) =>{
    const [ currentImage, setCurrentImage ] = useState('')


    const changeCurrentImage = (currentImage:string) =>{
        setCurrentImage(currentImage)
    }
    return(
        <CurrentImageContext.Provider value={{ currentImage, changeCurrentImage }}>
            { children }
        </CurrentImageContext.Provider>
    )
}