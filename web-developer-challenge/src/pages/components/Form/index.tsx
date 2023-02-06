import React from "react";
import { Row, Col } from "antd";
import { CardContainer, Column } from "./styles";

const index = () => {
  return (
    <Row>
      <Column xs={24} xl={24}>
        <CardContainer></CardContainer>
      </Column>
    </Row>
  );
};

export default index;
