import styled from "styled-components";

export const ContainerPost = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 12px 12px 32px 24px;
	border-radius: 3px;
	border: solid 1px #3b3b3b;
	background-color: #313131;
`;

export const DeletePost = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	width: 100%;
	margin-bottom: 24px;
`;

export const IconDelete = styled.img``;

export const ImagePost = styled.img`
	width: 88px;
	height: 88px;
	object-fit: cover;
	border-radius: 36px;
`;

export const PostItem = styled.section`
	display: flex;
	gap: 32px;
`;
export const InformationPost = styled.div`
	flex-direction: row;
`;
export const Message = styled.p`
	font-family: Roboto;
	font-size: 1em;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: left;
	color: #9f9f9f;
	margin-bottom: 24px;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const Author = styled.div`
	div {
		font-family: Roboto;
		font-size: 0.8em;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.33;
		letter-spacing: 0.29px;
		text-align: left;
		color: #5f5f5f;
	}
`;
export const NameAuthor = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 0.9em;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.29;
	letter-spacing: normal;
	text-align: left;
	color: #7a7a7a;
`;
