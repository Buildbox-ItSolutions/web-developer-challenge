import Image from 'next/image'
import styled from 'styled-components'
import headerImage from '../../public/header-image.png'

const StyledHeader = styled.header`
  background-color: #2b2b2b;
  height: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #232323;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

const Header = () => {
  return (
    <StyledHeader>
      <Image src={headerImage} width={103} height={45} />
    </StyledHeader>
  )
}

export default Header
