import React from "react";
import { ListContainer } from "./style";

type ListProps = {
  children: React.ReactNode;
};

export const List = ({ children }: ListProps) => {
  return (
    <ListContainer>
      <h1>Feed</h1>
      {children}
    </ListContainer>
  );
};
