import React from 'react';

import { Container } from './styles';

type Props = {
  errors: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
  name: string;
};

const ErrorMessage: React.FC<Props> = ({ errors, name }) => {
  return (
    <Container data-testid={`error-${name}`}>{errors[name]?.message}</Container>
  );
};

export default ErrorMessage;
