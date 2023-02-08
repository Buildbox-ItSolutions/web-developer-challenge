import { GeneralContainer } from './styled';

interface CardProps {
  children?: JSX.Element | JSX.Element[];
}

function Container({ children }: CardProps) {
  return <GeneralContainer>{children}</GeneralContainer>;
}

export default Container;
