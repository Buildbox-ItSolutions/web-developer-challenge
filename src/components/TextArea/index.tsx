import React from 'react';

/* Styles */
import { Input } from './styles';

/* Types */
import { TextAreaProps } from './types';

const TextArea: React.FC<TextAreaProps> = ({
  id,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <Input
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default TextArea;
