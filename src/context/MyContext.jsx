import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = (props) => {
  const [listPosts, setListPosts] = useState([]);

  const states = {
    listPosts,
    setListPosts,
  };

  return (
    <MyContext.Provider value={states}>
      {props.children}
    </MyContext.Provider>
  )
};