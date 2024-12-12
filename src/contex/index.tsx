import React, { useState } from "react";

export const ContextManager = React.createContext<any>({});
interface providerProp {
  children: React.ReactNode;
}

export const ManagerProvider: React.FC<providerProp> = ({ children }) => {
  const [comments, setComments] = useState([
    {
        "id": 39495.98545787931,
        "user": "Luiz Fernando",
        "message": "Programador Full-Stack. espero que gostem :)",
        "img": "luiz.jpg"
    },
    
]);

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
