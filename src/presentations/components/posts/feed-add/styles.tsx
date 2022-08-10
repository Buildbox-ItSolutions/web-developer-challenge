import styled from "styled-components";
import { IconButton } from "../../core/buttons/icons/styles";

export const GroupActions = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ${IconButton} {
    position: absolute;
    right: -40px;
    width: 24px;
    height: 24px;
  }
`;

export const GroupButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    margin-left: 24px;
  }
`;
