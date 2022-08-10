import { ReactNode } from 'react';

interface BodyProps {
  children: ReactNode;
}

export function Body({ children }: BodyProps) {
  return (
    <>
      <h1>Body</h1>
      {children}
    </>
  );
}
