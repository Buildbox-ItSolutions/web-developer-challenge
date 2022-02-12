import * as React from 'react';

type UploaderFunction = (
  e: React.ChangeEvent<HTMLInputElement> | undefined,
  image?: FileList,
) => void;

type UseDisplayImage = () => [string | undefined, UploaderFunction];

export const useDisplayImage: UseDisplayImage = () => {
  const [result, setResult] = React.useState<string>();

  const uploader: UploaderFunction = React.useCallback((e, image) => {
    const files = e ? e.target.files : image;
    if (files) {
      const imageFile = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setResult(reader.result);
        }
      };

      reader.readAsDataURL(imageFile);
    }
  }, []);

  return [result, uploader];
};
