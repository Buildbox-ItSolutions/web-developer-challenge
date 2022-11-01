import React from "react";
import { PropsDashContext } from "./interfaces";

export const DashContext = React.createContext<PropsDashContext | null>(null);

const DashContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const stateGlobal = React.useMemo(() => ({}), []);

  return (
    <DashContext.Provider value={stateGlobal}>{children}</DashContext.Provider>
  );
};

export default DashContextProvider;
