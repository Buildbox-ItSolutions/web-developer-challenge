import styles from 'styled-components'

const HeaderContainer = styles.header`
  width: 100vw;
  height: 93px;
  padding: 24px 631px 24px 632px;
  background-color: #2b2b2b;
`
const HeaderImageSVG = styles.img`
width: 103px;
height: 45px;
object-fit: contain;
`

function Header() {
	return (
		<HeaderContainer>
			<HeaderImageSVG src="/assets/bg-logo.png" />
		</HeaderContainer>
	)
}

export default Header