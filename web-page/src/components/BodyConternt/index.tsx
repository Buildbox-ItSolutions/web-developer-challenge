import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

const BodyContent: React.FC<Props> = ({ children }) =>{
  return (
    <Container>
      {children}
    </Container>
  )
}
BodyContent.displayName = 'BodyContent';
export type BodyContentProps = Props;
export default BodyContent;
