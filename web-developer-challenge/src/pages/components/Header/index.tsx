import React from "react";
import { Row } from "antd";
import { Container, Column, LogoImage } from "./styles";

const HeaderNav = () => {
  return (
    <Container>
      <Row>
        <Column xs={24} xl={24}>
          <LogoImage src="/bx-logo.png" alt="logo" preview={false} />
        </Column>
      </Row>
    </Container>
  );
};

export default HeaderNav;
