import React, {useState} from "react";
import styled from "styled-components";

import Header from "./components/header/index.tsx";
import Create from "./components/createBox/index.tsx";
import Feed from "./components/feed/index.tsx";

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 170px;
  overflow-x: hidden;
`;

export default function App() {
  const [change, setChange] = useState(false)

  return (
    <StyledApp>
      <Header />
      <div className="App" style={{marginTop: '93px'}}>
        <Create  setChange={setChange}/>
        <Feed setChange={setChange} change={change}/>
      </div>
    </StyledApp>
  );
}
