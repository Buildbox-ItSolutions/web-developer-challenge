import placeholderUpload from '@assets/placehold-upload.png';

import * as S from './styles';

type PropImage = {
  src: string | null;
  onClick?: (event: React.MouseEvent) => void;
};

const Image = ({ src, onClick }: PropImage) => {
  return (
    <S.Container onClick={onClick} hasImage={!!src}>
      <S.Image
        src={src || placeholderUpload}
        hasImage={!!src}
        alt="upload photo"
      />
    </S.Container>
  );
};

export default Image;
