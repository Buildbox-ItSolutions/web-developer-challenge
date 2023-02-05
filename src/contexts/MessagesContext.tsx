import { ReactNode, useEffect, useState, createContext } from 'react'
import { api } from '../services/axios'

import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';

export interface MessageDTO {
  id: number;
  author: string;
  authorAvatar: string;
  content: string;
  createdAt: Date;
}

interface PostMessageInput {
  author: string;
  authorAvatar: File;
  content: string;
}

export interface MessagesContextDataProps {
  messages: MessageDTO[];
  fetchMessages: () => Promise<void>;
  postMessage: (data: PostMessageInput) => Promise<void>;
  deleteMessage: (id: number) => Promise<void>;
}

interface MessagesProviderProps {
  children: ReactNode
}

export const MessagesContext = createContext({} as MessagesContextDataProps)

export function MessagesProvider({ children }: MessagesProviderProps) {
  const [messages, setMessages] = useState<MessageDTO[]>([])

  async function fetchMessages() {
    try {
      const { data } = await api.get('/message', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
        },
      });

      setMessages(data);
    } catch (error) {
      toast.error('Opsss! Não foi possível carregar o feed.');
    }
  }

  async function postMessage({ author, authorAvatar, content }: PostMessageInput) {
    try {
      const avatarUrl = await uploadImage(authorAvatar);

      const { data } = await api.post('/message', {
        author,
        authorAvatar: avatarUrl,
        content,
        createdAt: new Date(),
      });

      setMessages((state) => [data, ...state])
    } catch (error) {
      toast.error('Opsss! Não foi possível publicar sua mensagem.');
    }
  }

  async function deleteMessage(id: number) {
    try {
      await api.delete(`/message/${id}`);
  
      const messagesData = messages.filter((message) => {
        if (message.id !== id) {
          return message;
        }
      }) as MessageDTO[];

      setMessages(messagesData);
    } catch (error) {
      toast.error('Opsss! Não foi possível excluir sua mensagem.');
    }
  }

  async function uploadImage(image: File) {
    let body = new FormData()
    body.set('key', import.meta.env.VITE_IMGBB_KEY)
    body.append('image', image)

    try {
      const { data } = await axios({
        method: 'POST',
        url: 'https://api.imgbb.com/1/upload',
        data: body
      });

      return data.data.url;
    } catch (err) {
      toast.error('Opsss! Não foi possível enviar sua foto.');
    }
  }

  useEffect(() => {
    fetchMessages();
  }, [])

  return (
    <MessagesContext.Provider
      value={{
        messages,
        fetchMessages,
        postMessage,
        deleteMessage
      }}
    >
      {children}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </MessagesContext.Provider>
  )
}
