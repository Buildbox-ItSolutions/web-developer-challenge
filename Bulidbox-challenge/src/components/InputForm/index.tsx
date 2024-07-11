import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
};

const InputField: React.FC<InputFieldProps> = ({ label, type, name, register }) => {
  return (
    <div className=' flex flex-col py-2'>
      <label htmlFor={name}>{label}</label>
      <input
        className='h-10 px-3 py-2 rounded-lg w-full'
        type={type}
        {...register(name)}
      />
    </div>
  );
};

export default InputField;
