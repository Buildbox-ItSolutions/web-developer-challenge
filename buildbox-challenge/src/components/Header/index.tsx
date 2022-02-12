import { Container } from './style'
import buildBoxLogo from '../../assets/buildBoxLogo.svg'
export const Header = () => {
  return (
    <Container>
        <img src = { buildBoxLogo } alt='build-box-logo'/>
    </Container>
  )
}
