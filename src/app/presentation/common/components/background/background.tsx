import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: JSX.Element;
};

const Background: React.FC<Props> = ({ children }) => {
  return (
    <Box bg="#343434" w="100vw" minHeight="100vh">
      {children}
    </Box>
  );
};

export default Background;
