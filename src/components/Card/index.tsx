import { CardContainer } from './styled';

interface CardProps {
  children?: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <CardContainer>{children}</CardContainer>;
}

export default Card;
