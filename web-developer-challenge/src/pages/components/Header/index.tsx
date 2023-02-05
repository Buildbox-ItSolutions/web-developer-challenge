import React from "react";
import { Row } from "antd";
import { Container, Content, LogoImage } from "./styles";

const HeaderNav = () => {
  return (
    <Container>
      <Row>
        <Content xs={24} xl={24}>
          <LogoImage src="/bx-logo.png" alt="logo" preview={false} />
        </Content>
      </Row>
    </Container>
  );
};

export default HeaderNav;
