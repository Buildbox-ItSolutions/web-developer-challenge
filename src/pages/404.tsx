import Typography from 'components/atoms/Typography';
import Layout from 'components/templates/layout';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Error() {
  return (
    <Layout>
      <Container>
        <Typography fontSize="huge" fontColor="gray_scale_6" fontWeight="bold">
          404
        </Typography>
        <Typography fontSize="md" fontColor="gray_scale_8">
          Desculpe, esta página não existe!
        </Typography>
      </Container>
    </Layout>
  );
}

export default Error;
