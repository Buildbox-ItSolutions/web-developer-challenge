import { InputHTMLAttributes } from 'react';

export interface IComponentParams
  extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  onDeleteThumbnail: () => void;
  thumbnailSource?: string | null;
}

export type TThumbnailSource = Pick<
  IComponentParams,
  'thumbnailSource'
>;
