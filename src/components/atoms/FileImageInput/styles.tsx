import styled from "styled-components";

export const Label = styled.label<{ hasPhoto: boolean }>`
  margin-left: ${({ hasPhoto }) => (hasPhoto ? 40 : 0)}px;
  margin-right: ${({ hasPhoto }) => (hasPhoto ? 16 : 0)}px;
  cursor: pointer;
`;

export const UploadButton = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const DefaultImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const UploadedImage = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
`;