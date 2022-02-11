import React from 'react';
import Layout from './components/layout'
import styled from 'styled-components';
import NewMessageBox from './components/sections/NewMessageBox';
import Messages from './components/sections/Messages'

const StyledMainContainer = styled.main``


function App() {
  return (
    <Layout> 
      <StyledMainContainer className="fillHeight">
          <NewMessageBox />
          <Messages />
      </StyledMainContainer>
    </Layout>
  );
}

export default App;
