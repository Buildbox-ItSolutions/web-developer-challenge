import styled from "styled-components";

interface TrashButtonProps {
  visible?: boolean;
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputLabel = styled.label`
  width: 88px;
  height: 88px;
  border-radius: 36px;
  border: none;
  position: absolute;

  input {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px ${(props) => props.theme.colors.border.grayLight};
  background-color: ${(props) => props.theme.colors.bg.blackDark};
  display: grid;
  place-items: center;
  overflow: hidden;

  img.selected {
    width: 88px;
  }
`;

export const TrashButton = styled.div<TrashButtonProps>`
  height: 88px;
  display: grid;
  place-items: center;
  visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
`;

