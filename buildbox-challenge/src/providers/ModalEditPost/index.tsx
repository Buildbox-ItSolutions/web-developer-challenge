import { ReactNode, useState, createContext} from "react";
interface ModalEditProviderProps{
    children:ReactNode
}

interface ModalEditData{
    actualEdit: number,
    settingActualEdit: (postId:number) => void,
    isModalEditShowing: boolean,
    settingShowingModalEdit:() => void
}

export const ModalEditContext = createContext <ModalEditData>({} as ModalEditData)

export const ModalEditProvider = ({ children }:ModalEditProviderProps) =>{
    const [actualEdit, setActualEdit] = useState(0)
    const [isModalEditShowing, setIsModalEditShowing ] = useState(false)

   
    const settingShowingModalEdit = () =>{
        setIsModalEditShowing(!isModalEditShowing)
    }
    const settingActualEdit = (postId:number) =>{
        setActualEdit(postId)
        settingShowingModalEdit()
    } 

    return(
        <ModalEditContext.Provider value={{actualEdit, isModalEditShowing, settingActualEdit, settingShowingModalEdit}}>
            { children }
        </ModalEditContext.Provider>
    )
}