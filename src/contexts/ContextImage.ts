import React from "react";

// TYPES
interface PropsSetState {
  status: boolean;
  image: string;
}

const DefaultValue = {
  stateImg: { status: false, image: "" },
  setStateImg: (state: PropsSetState) => {},
};

export const ContextImage = React.createContext(DefaultValue);
