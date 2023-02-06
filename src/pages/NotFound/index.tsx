import React from "react";
import { Helmet } from "react-helmet";

import { Container } from "./styles";

const NotFound: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>BuildBox | 404</title>
      </Helmet>

      <h1>404</h1>
      <h2>Pagina não encontrada</h2>
    </Container>
  );
};

export default NotFound;
