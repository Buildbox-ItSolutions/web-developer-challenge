import styled from "styled-components";

import deleteImg from "./../../../../../../img/delete.png";

export const DeleteBtn = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${deleteImg});
  position: absolute;
  right: 8px;
  top: 10px;
  cursor: pointer;
`;
