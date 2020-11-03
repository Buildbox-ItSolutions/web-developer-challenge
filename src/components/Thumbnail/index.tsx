import React from 'react';
import {
  TrashIcon,
  UploadImage,
  UploadImageContainer,
  ThumbnailContainer,
  ImageContainer,
} from './styles';
import icon from '../../assets/image.png';
import trash from '../../assets/trash.png';
import { usePost } from '../../contexts/Post';
const fakeurl = 'https://source.unsplash.com/random/90x90';

const Thumbnail = () => {
  const { thumbUrl, setThumbUrl } = usePost();
  return (
    <ThumbnailContainer>
      {thumbUrl === '' ? (
        <UploadImageContainer onClick={() => setThumbUrl(fakeurl)}>
          <UploadImage src={icon} />
        </UploadImageContainer>
      ) : (
        <>
          <ImageContainer src={thumbUrl} />
          <TrashIcon src={trash} onClick={() => setThumbUrl('')} />
        </>
      )}
    </ThumbnailContainer>
  );
};

export default Thumbnail;
