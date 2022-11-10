import React from 'react';

import { Container, Props } from '.';

const Card: React.FC<Props> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Card;
