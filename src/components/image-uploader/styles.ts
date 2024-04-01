import styled, { css } from "styled-components";
import { Button } from "..";

export const imgStyles = css`
  height: 88px;
  width: 88px;
  border-radius: 36px;
`;

export const Container = styled.div`
  align-self: center;
  position: relative;
  padding-block: 8px;
  ${imgStyles}
`;

export const TrashButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -36px;
`;

export const AddImageLabel = styled.label`
  display: grid;
  border: 2px solid #494949;
  background-color: transparent;
  cursor: pointer;
  place-content: center;

  &:hover {
    background-color: #353535;
  }

  ${imgStyles}
`;

export const AddImageInput = styled.input`
  display: none;
`;

export const Preview = styled.img`
  ${imgStyles}
`;
