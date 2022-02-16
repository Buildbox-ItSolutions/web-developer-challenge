import * as React from 'react';

export type UploaderFunction = (e: React.ChangeEvent<HTMLInputElement>, image?: FileList) => void;

type UseDisplayImage = () => [
  string | undefined,
  UploaderFunction,
  React.Dispatch<React.SetStateAction<string | undefined>>,
];

export const useDisplayImage: UseDisplayImage = () => {
  const [result, setResult] = React.useState<string>();

  const uploader: UploaderFunction = React.useCallback((e) => {
    const files = e.target.files;
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

  return [result, uploader, setResult];
};
