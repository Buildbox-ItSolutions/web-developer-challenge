import React, { ReactNode, useEffect, useState } from 'react';
import { Container } from './styles';

interface AnimatedContainerProps {
  children: ReactNode;
  show: boolean;
}

const AnimatedContainer = ({ show, children }: AnimatedContainerProps) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return shouldRender ? (
    <Container
      style={{
        animation: `${show ? 'slideInDown' : 'slideOutLeft'} 1s`,
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </Container>
  ) : (
    <></>
  );
};

export default AnimatedContainer;
