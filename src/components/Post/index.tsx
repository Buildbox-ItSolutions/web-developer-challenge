import * as Styled from './styles';
import { useEffect } from 'react';

export type PostProps = {
  name: string;
  message: string;
  photo: string;
  index: number;
  onDelete: (index: number) => void;
};

export default function Post({
  name,
  message,
  photo,
  index,
  onDelete,
}: PostProps) {
  useEffect(() => {
    if (typeof index === 'number' && photo) {
      const img = document.getElementById('image-' + index) as HTMLImageElement;
      img.src = photo;
      img.style.width = '100%';
      img.style.height = '100%';
    }
  }, [index, photo]);

  return (
    <Styled.Wrapper>
      <span onClick={() => onDelete(index)}>X</span>
      <h3>{name}</h3>
      <p>{message}</p>
      <img alt="postImage" src="" id={'image-' + index} />
    </Styled.Wrapper>
  );
}
