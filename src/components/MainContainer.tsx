import styled from "styled-components";
import { tabblet } from "../Styles";

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: Roboto;
	;
	`
export const CemterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	${tabblet`
		width: 516px;
	`}
`