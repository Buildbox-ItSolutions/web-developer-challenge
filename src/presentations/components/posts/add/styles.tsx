import styled from "styled-components";
import { TrashButton } from "../../core/buttons/icon-button";
import { CustomIconButton } from "../../core/buttons/styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;

  width: 100%;
  max-width: 516px;
  height: 353px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
`;

export const GroupActions = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ${CustomIconButton} {
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
