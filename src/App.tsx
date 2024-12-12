import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./app/presentation/modules/contexts/auth-context";
import Background from "./app/presentation/common/components/background/background";
import Router from "./app/main/routes/router";
import {
  theme,
  themeStyleComponents,
} from "./app/presentation/styles/global-styles";
import { ThemeProvider } from "styled-components";
import PostsProvider from "./app/presentation/modules/contexts/postItem";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostsProvider>
          <ChakraProvider theme={theme}>
            <ThemeProvider theme={themeStyleComponents}>
              <Background>
                <Router />
              </Background>
            </ThemeProvider>
          </ChakraProvider>
        </PostsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
