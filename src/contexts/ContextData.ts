import React from "react";

// TYPES
interface PropsSetState {
  image: string;
  name: string;
  msg: string;
}

const DefaultValue = {
  state: { image: "", name: "", msg: "" },
  setState: (state: PropsSetState) => {}, // noop default callback
};

export const Context = React.createContext(DefaultValue);
