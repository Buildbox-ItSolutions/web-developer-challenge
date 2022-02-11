import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StyledButton } from "./components/Button/style";
import Form from "./components/Form";
import Header from "./components/Header";
import { MainContainer } from "./global";
import Feed from "./components/Feed";
// import GlobalButton from "./components/Button";

function App() {
  return (
    <MainContainer>
      <Header />
      <Form />
      <Feed />
    </MainContainer>
  );
}

export default App;
