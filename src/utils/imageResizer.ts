import { FormEvent } from 'react';
import Resizer from 'react-image-file-resizer';

const resizeFile = (file: File) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      'png',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64'
    );
  });

export const ImageResizer = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files as FileList;

  try {
    const file = files[0];
    const image = await resizeFile(file);

    return image as string;
  } catch (err) {
    console.log(err);
  }
};
