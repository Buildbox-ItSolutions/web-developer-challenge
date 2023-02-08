import { ImgHTMLAttributes } from "react"
import styled from "styled-components"

export const AvatarContainer = styled.img`
	${(props: ImgHTMLAttributes & {
	default: boolean
}) => props.default ? `
	width: 1.5em;
	height: 1.5em;
	`: `
	display: block;
  max-width:88px;
  max-height:88px;
  width: auto;
  height: 88px;
	`}
  object-fit: cover;
	border-radius: 36px;
;`