import React from "react";
import styled from "styled-components";

import Header from "./components/header/index.tsx";
import Create from "./components/createBox/index.tsx";
import Feed from "./components/feed/index.tsx";

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <StyledApp>
      <div className="App">
        <Header />
        <Create />
        <Feed />
      </div>
    </StyledApp>
  );
}
