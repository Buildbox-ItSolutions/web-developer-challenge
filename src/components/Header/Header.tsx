import Image from 'next/image'
import { HeaderWrapper } from './Header.Styles/HeaderWapper.Style'
import logo from '@/assets/bx-logo.svg'

export const Header = () => {
	return (
		<HeaderWrapper>
			<div>
				<Image src={logo} alt={'buildbox logo'} fill style={{objectFit: 'contain'}}/>
			</div>
		</HeaderWrapper>
	)
}
