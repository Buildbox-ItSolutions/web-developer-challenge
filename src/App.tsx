import { createGlobalStyle, styled } from "styled-components";

import { Header, PostForm, Feed } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledSection>
        <PostForm />
        <Feed />
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

html {
  font-size: 62.5%;
  background-color: var(--background-color);
}

@font-face {
  font-family: "Sequel Sans";
  src: url("./src/fonts/sequel-sans-black-head.ttf");
}

@font-face {
  font-family: "SFProDisplay";
  src: url("./src/fonts/SFProDisplay.OTF");
}

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: var(--warm-gray);
  border-radius: 1rem;
}

:root {
  --header-color: #2b2b2b;
  --background-color: #343434;
  --primary-color: #71bb00;
  --auxiliar-gray: #5f5f5f;
  --warm-gray: #707070;
  --warm-gray-two: #7a7a7a;
  --white-color: #ffffff;
  --button-hover-color: #70bb00c8;
  --rectangle-color: #313131;
  --border-color: #3b3b3b;
  --background-input-color: #494949;
  --auxiliar-text-color: #9f9f9f;
  --icons-color: #d65923;
}
`;

export default App;
