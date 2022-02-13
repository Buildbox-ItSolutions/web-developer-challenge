import Layout from './components/Layout'
import styled from 'styled-components';
import NewMessageBox from './components/sections/NewMessage';
import Messages from './components/sections/Feed'
import { MessageProvider } from './hooks/useMessages'

const StyledMainContainer = styled.main``


function App() {
  return (
    <Layout> 
      <StyledMainContainer className="fillHeight">
        <MessageProvider>
          <NewMessageBox />
          <Messages />
        </MessageProvider>        
      </StyledMainContainer>
    </Layout>
  );
}

export default App;
