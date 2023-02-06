import { TextareaHTMLAttributes } from 'react';

export interface IComponentParams
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  message?: string;
}
