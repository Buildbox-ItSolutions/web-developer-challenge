import { ImgHTMLAttributes } from "react"
import styled from "styled-components"
import imageIcon from '../assets/image.svg'

type AvatarContainerProps = ImgHTMLAttributes & {
	default?: boolean
}

export function AvatarContainer(props: AvatarContainerProps) {
	return (
		<Container>
			<ImageItem default={!props?.src} src={props?.src ?? imageIcon} />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 96px;
	height: 88px;
	border-radius: 36px;
	border-color: #494949;
	border-style: solid;
	border-width: 1px;
	margin-bottom: 16px;
	padding: 0px 0px;
`
const ImageItem = styled.img`
	${(props: AvatarContainerProps) => props.default ? `
	width: 24px;
	height:24px;
	display: block;
	padding: 0px 32px;
	`: `
  height: auto;
  width: 88px;
	`}
  object-fit: cover;
	display: flex;
	border-radius: 36px;
;`
