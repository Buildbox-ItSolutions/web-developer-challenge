'use client';

import { ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

type StoreProviderProps = {
  children: ReactElement;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>
};
