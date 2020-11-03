import styled from 'styled-components';

export const ThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const UploadImageContainer = styled.div`
  width: fit-content;
  cursor: pointer;
  height: fit-content;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadImage = styled.img`
  margin: 32px;
  object-fit: contain;
`;

export const TrashIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 16px;
  align-self: center;
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.2s ease-in-out;
`;

export const ImageContainer = styled.img`
  margin-top: 24px;
  margin-left: 40px;
  margin-bottom: 24px;
  align-self: center;
  width: 90px;
  height: 90px;
  object-fit: contain;
  border-radius: 36px;
`;
