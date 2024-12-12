import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { json } from "stream/consumers";
import defaultImage from "../assets/image.svg";

interface ProviderProps {
  children: ReactNode;
}
interface IMessages {
  name: string;
  message: string;
  photo: string;
}
interface MessageData {
  name: string;
  message: string;
  photo: string;
  data: IMessages;
  messages: IMessages[];
  setName: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setPhoto: React.Dispatch<React.SetStateAction<string>>;
  setMessages: React.Dispatch<React.SetStateAction<IMessages[]>>;
}

const ProviderContext = createContext<MessageData>({} as MessageData);

export const Provider = ({ children }: ProviderProps) => {
  const [photo, setPhoto] = useState(defaultImage);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessages[]>(
    JSON.parse(localStorage.getItem("messages") || "[]")
  );

  const data = {
    name: name,
    message: message,
    photo: photo,
  };

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <ProviderContext.Provider
      value={{
        name,
        setName,
        message,
        setMessage,
        photo,
        setPhoto,
        data,
        messages,
        setMessages,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};
export const useProvider = () => useContext(ProviderContext);
