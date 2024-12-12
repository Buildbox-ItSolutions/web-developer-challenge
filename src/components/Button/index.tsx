import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <>
      <h1>Button</h1>
      {children}
    </>
  );
}
