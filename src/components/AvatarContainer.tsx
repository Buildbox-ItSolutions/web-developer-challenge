import { ImgHTMLAttributes } from "react"
import styled from "styled-components"
import imageIcon from '../assets/image.svg'

type AvatarContainerProps = ImgHTMLAttributes & {
	default?: boolean
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 88px;
	height: 88px;
	border-radius: 36px;
	border-color: #494949;
	border-style: solid;
	border-width: 1px;
	margin-bottom: 16px;
`
const ImageItem = styled.img`
	${(props: AvatarContainerProps) => props.default ? `
	width: 1.5em;
	height: 1.5em;
	`: `
	display: block;
  height: auto;
  width: 88px;
	`}
  object-fit: cover;
	border-radius: 36px;
;`

export function AvatarContainer(props: AvatarContainerProps) {
	return (
		<Container>
			<ImageItem default={!props?.src} src={props?.src ?? imageIcon} />
		</Container>
	)
}