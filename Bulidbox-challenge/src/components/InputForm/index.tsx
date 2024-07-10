import React, { ChangeEvent } from 'react';

interface Props {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({ label, type, name, value, onChange }) => {
  return (
    <div className=' flex flex-col py-2'>
      <label htmlFor={name}>{label}</label>
      <input
        className='h-10 px-3 py-2 rounded-lg w-full'
        type={type}
        id={name}
        name={name}
        value={value}  
        onChange={onChange}  
      />
    </div>
  );
};

export default InputField;
