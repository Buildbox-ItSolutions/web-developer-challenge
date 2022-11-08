import React, { createContext, useCallback, useMemo, useState } from 'react';
import { v4 } from 'uuid';

import { sortArrayByDate } from 'utils/sort-array';

export interface Message {
  id?: string;
  name: string;
  description: string;
  image?: string | null;
  date?: string;
}

export interface MessageContextProps {
  messages: Message[];
  addMessage: (message: Message) => void;
  removeMessage: (id: string) => void;
}

export const MessageContext = createContext<MessageContextProps>(
  {} as MessageContextProps,
);

const storageMessageKey = '@buildbox:message';

const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[] | any>(() => {
    const localMessages = localStorage.getItem(storageMessageKey);
    if (localMessages) {
      const messagesParsed = sortArrayByDate(JSON.parse(localMessages), 'date');
      return messagesParsed;
    }

    return [];
  });

  const addMessage = useCallback(
    (message: Message) => {
      const data = {
        id: v4(),
        date: new Date().toISOString(),
        ...message,
      };
      setMessages((prevState: Message[]) => {
        const newMessages = sortArrayByDate([...prevState, data], 'date');
        localStorage.setItem(storageMessageKey, JSON.stringify(newMessages));
        return newMessages;
      });
    },
    [messages],
  );

  const removeMessage = (id: string) => {
    const index = messages.findIndex((message: Message) => message.id === id);
    const newMessages = messages;
    if (Number.isInteger(index)) {
      newMessages.splice(index, 1);
    }
    localStorage.setItem(storageMessageKey, JSON.stringify(newMessages));
    setMessages([...newMessages]);
  };

  const context = useMemo(
    () => ({
      messages,
      addMessage,
      removeMessage,
    }),
    [messages, addMessage, removeMessage],
  );

  return (
    <MessageContext.Provider value={context}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
