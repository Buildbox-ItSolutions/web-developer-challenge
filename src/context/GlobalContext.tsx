import { ReactNode, useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";
import { Action, State } from "../helpers";

interface ElementsChildren {
  children?: ReactNode;
}
const InitialState: State = {
  posts: [],
  fileImg: "",
  fields: {
    message: "",
    author: "",
    valueImg: "",
  },
};

interface GlobalContextState {
  dispatch: React.Dispatch<Action>;
  state: State;
}

export const createContextGlobal = createContext<GlobalContextState>({
  dispatch: () => null,
  state: InitialState
});

export default function GlobalContext({ children }: ElementsChildren) {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <createContextGlobal.Provider
      value={{
        dispatch,
        state,
      }}
    >
      {children}
    </createContextGlobal.Provider>
  );
}
