import classNames from 'classnames';
import { FC } from 'react';

import { UploadProps } from './model';
import { UploadStyled } from './styles';

export const BixUpload: FC<UploadProps> = ({ icons, onUpload, onClear, preview }) => {
  const getFile = (files: FileList | []) => {
    if (files.length == 1) {
      const file = files[0];

      if (file.type.includes('image')) {
        const preview = URL.createObjectURL(file);

        onUpload(file, preview);
      }
    }
  };

  return (
    <UploadStyled>
      <label htmlFor="upload" className={classNames({ upload: !!preview })}>
        <img src={icons.upload} />

        <img src={preview} />
      </label>

      <input
        type="file"
        id="upload"
        accept="image/png, image/gif, image/jpeg"
        onChange={e => getFile(e.target.files || [])}
      />

      {preview && <img onClick={() => onClear!()} src={icons.clear} />}
    </UploadStyled>
  );
};

BixUpload.defaultProps = {
  onClear: () => {},
};
