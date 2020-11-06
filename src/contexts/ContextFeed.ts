import React from "react";

// TYPES
interface PropsSetState {
  status: boolean;
}

const DefaultValue = {
  stateFeed: { status: false},
  setStateFeed: (state: PropsSetState) => {},
};

export const ContextFeed = React.createContext(DefaultValue);
