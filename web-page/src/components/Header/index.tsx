import { Container } from "./styles"
interface Props {
  children?: React.ReactNode;
}

const Header: React.FC<Props> = () =>{
  return (
    <Container>
      <div className="page-details">
        <h1>Buildbox</h1>
        <h2>WEB CHALLENGE</h2>
      </div>
    </Container>
  )
}
Header.displayName = 'Header';
export type HeaderProps = Props;
export default Header;
