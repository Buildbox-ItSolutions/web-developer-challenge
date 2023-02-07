import { InputHTMLAttributes } from 'react';

import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  getMsgNameField?: boolean;
}

export function Input({ getMsgNameField, ...props }: InputProps) {
  return (
    <>
      <StyledInput {...props} />
      {getMsgNameField && (
        <p
          style={{
            color: '#f00',
            fontSize: '0.8rem',
            width: '100%',
            maxWidth: '468px',
            margin: '0.2rem 0 0 0',
            paddingLeft: '1rem',
          }}
        >
          Este campo é obrigatório
        </p>
      )}
    </>
  );
};
