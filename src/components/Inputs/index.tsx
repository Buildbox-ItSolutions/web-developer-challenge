import React from 'react';

/* Styles */
import { Input } from './styles';

/* Types */
import { InputsProps } from './types';

const Inputs: React.FC<InputsProps> = ({
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
      autoComplete="off"
      onChange={handleChange}
    />
  );
};

export default Inputs;
