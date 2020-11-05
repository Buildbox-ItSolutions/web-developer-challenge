import React from "react";

const DefaultName = "";
const DefaultMsg = "";

const ContextName = React.createContext(DefaultName);
const ContextMsg = React.createContext(DefaultMsg);

export { ContextName, ContextMsg };
