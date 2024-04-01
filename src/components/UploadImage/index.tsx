import { ComponentProps, forwardRef } from 'react';

import { Omit } from '../../@types/OmitTyped';

export type UploadImageProps = Omit<ComponentProps<'input'>, 'type'>;

export const UploadImage = forwardRef<HTMLInputElement, UploadImageProps>(
  (props, ref) => <input ref={ref} type="file" {...props} />,
);

UploadImage.displayName = 'UploadImage';
