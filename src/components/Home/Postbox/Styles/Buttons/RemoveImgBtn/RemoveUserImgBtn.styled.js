import styled from "styled-components";
import { gray_400 } from "../../../../../../styles/colors/colors";
import deleteImg from "./../../../../../../img/trash.png";

export const RemoveUserImgButton = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  background-image: url(${deleteImg});
  cursor: pointer;
  background-color: ${gray_400};
  border: none;
  background-repeat: no-repeat;
  margin-left: 16px;
  left: 88px;
  position: absolute;
  top: 32px;
`;
