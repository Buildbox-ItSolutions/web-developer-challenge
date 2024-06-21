import { FooterContainer, Link } from './Footer'
import linkedinLogo from '../../assets/linkedin.svg'
import gitHubLogo from '../../assets/github.svg'


function Footer() {

  return (
    <FooterContainer>
      <Link href="https://github.com/cleitson" target="_blank" rel="noreferrer">
        <img src={gitHubLogo} alt="perfil github" />
      </Link>
      <Link href="https://www.linkedin.com/in/cleitsonlima/" target="_blank" rel="noreferrer">
        <img src={linkedinLogo} alt="perfil linkedin" />
      </Link>
    </FooterContainer>
  )
}

export default Footer