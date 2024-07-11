import React from 'react';
import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';

type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
};

const InputField: React.FC<InputFieldProps> = ({ label, type, name, register }) => {
  return (
    <InputFieldContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        type={type}
        {...register(name)}
      />
    </InputFieldContainer>
  );
};

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

const InputLabel = styled.label`
  
`;

const Input = styled.input`
  height: 2.5rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  width: 100%;
`;
export default InputField;
