import styled from "styled-components";
import image from "./../../../../img/image.png";

export const ImgContainer = styled.div`
  width: 88px;
  height: 88px;
  margin: auto;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  background-image: url(${(props: { filePath: string }) => props.filePath});
  background-repeat: no-repeat;
  background-position: center;
`;
