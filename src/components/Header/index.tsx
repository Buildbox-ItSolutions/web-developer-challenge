import Image from 'next/image'
import { HeaderContainer } from './style'

export default function Header() {
  return (
    <HeaderContainer>
      <Image
        src="/bx-logo.png"
        alt="buildbox web challenge logo"
        width="103px"
        height="45px"
      />
    </HeaderContainer>
  )
}
