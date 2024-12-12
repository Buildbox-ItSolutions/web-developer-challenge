import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
`;

export const ImageInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 88px;
  width: 88px;
  border: 1px solid #4b4b4b;
  border-radius: 40%;
  overflow: hidden;
`;

export const ImageInput = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
