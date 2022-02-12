import React from 'react';

import { Container } from './styles';

type Props = {
  errors: {
    [x: string]: any;
  };
  name: string;
};

const ErrorMessage: React.FC<Props> = ({ errors, name }) => {
  return <Container>{errors[name]?.message}</Container>;
};

export default ErrorMessage;
