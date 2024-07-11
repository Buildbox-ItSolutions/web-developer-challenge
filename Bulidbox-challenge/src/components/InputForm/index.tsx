import React from 'react';
import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';

type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
  errors: any;
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

const ErrorMessage = styled.span`
  color: red;
  margin-top: 0.25rem;
  font-size: 0.875rem;
`;

const InputField: React.FC<InputFieldProps> = ({ label, type, name, register, errors }) => {
  return (
    <InputFieldContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        type={type}
        {...register(name, { required: `campo ${label} vazio` })}
      />
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </InputFieldContainer>
  );
};

export default InputField;
