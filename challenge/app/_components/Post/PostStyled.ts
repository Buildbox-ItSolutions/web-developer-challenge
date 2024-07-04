import styled from "styled-components";

export const PostStyled = styled.div`
	gap: 30px;
	width: 100%;
	display: flex;
	position: relative;
	padding: 38px 18px;
	align-items: center;
	height: fit-content;
	background-color: #313131;

	* {
		color: #808080;
	}

	.image {
		width: 90px;
		height: 90px;
		position: relative;
		border-radius: 35px;
		border: 1px solid #353535;
		img {
			width: 90px;
			height: 90px;
			border-radius: 35px;
			object-fit: cover;
		}
	}

	.message {
		gap: 17px;
		width: 67%;
		display: flex;
		flex-direction: column;
	}
`;
