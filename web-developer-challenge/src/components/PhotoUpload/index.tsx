import { ChangeEvent, useContext, useEffect, useState } from 'react';
import avatar from '../../assets/avatar.png';
import trash from '../../assets/trash.svg';
import Context from '../../context/Context';
import * as S from './styles';

export function PhotoUpload() {
  const { imgProfile, setImgProfile } = useContext(Context);

  function onClickTrash() {
    localStorage.clear();
    setImgProfile(avatar);
  }

  async function getStorageImage() {
    const { image } = await JSON.parse(localStorage.getItem('image') || '{}');
    const storageImage = image ? image : avatar;
    setImgProfile(storageImage);
  }

  useEffect(() => {
    getStorageImage();
  }, []);

  const fileChangedHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const fileList = event?.target.files;
    if (!fileList) return;

    const file = fileList[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImgProfile(fileReader.result);
      localStorage.setItem(
        'image',
        JSON.stringify({ image: fileReader.result }),
      );
    };
  };

  return (
    <S.Container>
      <S.AvatarContainer>
        <S.InputLabel htmlFor='imput-image'>
          <S.Avatar src={imgProfile ? imgProfile : avatar} />
        </S.InputLabel>
      </S.AvatarContainer>
      <S.Input
        id='imput-image'
        type='file'
        onChange={(e) => fileChangedHandler(e)}
      />
      <S.Trash src={trash} onClick={onClickTrash} />
    </S.Container>
  );
}
