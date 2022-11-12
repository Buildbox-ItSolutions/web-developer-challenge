import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/app/presentation/styles/global-styles";

export const renderWithRouter = (ui: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ChakraProvider theme={theme}>{ui}</ChakraProvider>
    </BrowserRouter>
  );
};
