import Image from 'next/image'
import Link from 'next/link'
import { HeaderContainer } from './styled'

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src="/logo.png" width={103} height={45} alt="Challenge" />
      </Link>
    </HeaderContainer>
  )
}
