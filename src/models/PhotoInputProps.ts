import { ChangeEvent } from 'react';

import { PreviewImage } from 'models/PreviewImage';

export interface PhotoInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  getPreviewImage?: PreviewImage | undefined;
}
