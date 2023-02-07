import styled from 'styled-components';

export const Container = styled.div`
  width: 88px;
  height: 88px;
  margin: 0 8px 16px 190px;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  cursor: pointer;
  
`;

export const ImgIconPhotoUpload = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const PhotoBase = styled.section`
  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 36px;

  margin-top:-32px;
  margin-left:-32px;
  
  img {
    width: 100%;
    border-radius: 36px;
  }
`;