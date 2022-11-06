import styled from "styled-components";
import deleteImg from "./../../../../../../img/trash.png";

export const RemoveUserImgButton = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  background-image: url(${deleteImg});
  cursor: pointer;
  background-color: #313131;
  border: none;
  background-repeat: no-repeat;
  margin-left: 16px;
`;
