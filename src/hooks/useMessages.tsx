import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

interface MessageProviderProps{
    children: ReactNode;
}

interface Message{
    id: number;
    name: string;
    text: string;
    image: string;
}

interface MessageInput{
    name: string;
    text: string;
    image: string;
}

interface MessagesContextData{
    messages: Message[],
    deleteMessage: any,
    createMessage: (message: MessageInput) => Promise<void>
}

const MessagesContext = createContext<MessagesContextData>({} as MessagesContextData)

export function MessageProvider({children}: MessageProviderProps){
    const [messages, setMessages] = useState<Message[]>([]);


    useEffect(() => {
        api.get('messages')
            .then(response => setMessages(response.data.messages))
    }, []);


    async function createMessage(messageInput: MessageInput){
        const response = await api.post('messages', {...messageInput})
        const { message } = response.data

        setMessages([
            message, ...messages
        ])
    }

    const deleteMessage = async (messageId: number) => {
        await api.delete(`messages/${messageId}`)
        setMessages(messages.filter(message => message.id !== messageId))
        
    }


    return(
        <MessagesContext.Provider value={{messages, createMessage, deleteMessage}}>
            {children}
        </MessagesContext.Provider>
    )
}

export function useMessages(){
    const context = useContext(MessagesContext)

    return context
}