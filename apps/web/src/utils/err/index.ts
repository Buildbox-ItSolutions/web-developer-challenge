import { FieldErrors, FieldValues } from 'react-hook-form';

export const appErrors = {
  messages: {
    required: 'Field is required',
  },
  getMessage: (field: string, errors: FieldErrors<FieldValues>) =>
    errors[field]?.message?.toString(),
};
