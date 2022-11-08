import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import trash from '@assets/trash.png';
import Image from '@components/Image';
import { imageToBase64 } from 'utils/image-to-base64';

import * as S from './styles';

const UploadImage = ({}, ref: any) => {
  const [file, setFile] = useState<string | null>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      getFile: () => {
        return file;
      },
      setFile: (data: any) => {
        return setFile(data);
      },
    }),
    [file],
  );

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error('Select a file');
      return;
    }

    const files = e.target.files;
    if (files.length > 0) {
      const image = (await imageToBase64(files[0])) as string;
      setFile(image);
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
  };

  return (
    <S.Container>
      <Image src={file} onClick={handleClick} />
      <S.Trash src={trash} onClick={handleRemoveImage} />
      <S.Input
        type="file"
        name="file"
        id="files"
        placeholder="Upload an Image"
        onChange={handleChange}
        ref={hiddenFileInput}
      />
    </S.Container>
  );
};

export default forwardRef(UploadImage);
