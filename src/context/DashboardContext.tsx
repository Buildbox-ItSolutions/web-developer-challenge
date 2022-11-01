import React from "react";
import { Message, PropsDashContext } from "./interfaces";

export const DashContext = React.createContext<PropsDashContext | null>(null);

const DashContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = React.useState<Message[] | any>([]);
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
