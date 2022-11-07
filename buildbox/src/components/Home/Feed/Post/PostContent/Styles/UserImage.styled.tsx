import styled from "styled-components";

export const UserImage = styled.div`
  box-sizing: border-box;
  padding: 86px 0px 0px 0px;
  overflow: hidden;
  width: 88px;
  height: 88px;
  min-width: 88px;
  max-height: 88px;
  margin-top: 0px;
  display: block;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  background-image: url(${(props: { filePath: string }) => props.filePath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  outline: none;
`;
