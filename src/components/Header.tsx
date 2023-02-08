import styles from 'styled-components'
import imageUrl from '../assets/bx-logo.png'
const HeaderContainer = styles.header`
	display: flex;
	justify-content: center;
	align-items: center;
  width: 100%;
  height: 5.8em;
  padding: 24px 0px;
  background-color: #2b2b2b;
`
const HeaderImageSVG = styles.img`
	width: auto;
	height: 2.8em;
	object-fit: contain;
`

function Header() {
	return (
		<HeaderContainer>
			<HeaderImageSVG src={imageUrl} />
		</HeaderContainer>
	)
}

export default Header