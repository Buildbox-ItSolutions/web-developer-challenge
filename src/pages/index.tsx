import React from "react";
import styled from "styled-components";

import Header from "../components/Header/index";
import BxLogo from "../images/Header/bx-logo.png";

const BoxBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  return (
    <React.Fragment>
      <Header backgroundColor="#2b2b2b">
        <img src={BxLogo} className="bx-logo" alt="Logo" />
      </Header>
      <BoxBody></BoxBody>
    </React.Fragment>
  );
};

export default Main;
