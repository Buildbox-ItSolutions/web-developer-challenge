import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import PostList from "./components/PostList";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PostList />
    </>
  );
};

export default App;
