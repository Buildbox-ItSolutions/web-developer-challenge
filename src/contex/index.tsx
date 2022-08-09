import React, { useState } from "react";

export const ContextManager = React.createContext<any>({});
interface providerProp {
  children: React.ReactNode;
}

export const ManagerProvider: React.FC<providerProp> = ({ children }) => {
  const [comments, setComments] = useState([]);

  return (
    <ContextManager.Provider
      value={{
        comments,
        setComments,
      }}
    >
      {children}
    </ContextManager.Provider>
  );
};
