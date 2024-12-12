import P from 'prop-types';

import { globalState } from './data';
import { createContext, useReducer } from 'react';

export const Context = createContext();

//eslint-disable-next-line
export const reducer = (state, action) => {
  switch (action.type[0]) {
    case 'add': {
      return [{ id: state.length + 1, photo: action.type[1], name: action.type[2], message: action.type[3] }, ...state];
    }

    case 'new': {
      return [...action.type[1]];
    }
  }
};

export const HomeContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

HomeContext.propTypes = {
  children: P.node,
};
