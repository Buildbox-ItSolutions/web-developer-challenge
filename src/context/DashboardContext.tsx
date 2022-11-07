import React from "react";
import { Message, PropsDashContext } from "./interfaces";
import { useEffect } from "react";

export const DashContext = React.createContext<PropsDashContext | null>(null);

const DashContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = React.useState<Message[] | any>([]);

  useEffect(() => {
    const localStorageMessages = localStorage.getItem("messagesBox");

    !localStorageMessages && localStorage.setItem("messagesBox", "[]");

    if (messages.length === 0 && localStorageMessages) {
      setMessages(JSON.parse(localStorageMessages));
      return;
    }
  }, []);

  const stateGlobal = React.useMemo(
    () => ({
      messages,
      setMessages,
    }),
    [messages],
  );

  return (
    <DashContext.Provider value={stateGlobal}>{children}</DashContext.Provider>
  );
};

export default DashContextProvider;
