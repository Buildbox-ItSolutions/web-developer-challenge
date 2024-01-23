import * as React from "react";
import * as Form from "./form.style";

const Forms: React.FunctionComponent = () => {
  return (
    <>
      <Form.Container>
        <Form.Input type="text" name="name" placeholder="Digite seu nome" />
        <Form.Input
          as="textarea"
          type="text"
          name="name"
          placeholder="Mensagem"
          rows={5}
        />
        <Form.ActionsWrapper>
          <Form.Button className="discard">Descartar</Form.Button>
          <Form.Button className="publish">Publicar</Form.Button>
        </Form.ActionsWrapper>
      </Form.Container>
    </>
  );
};

export default Forms;
