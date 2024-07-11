import React from 'react';
import { InputProps, StyledInput } from './style';

export default function Input ({ placeholder, onChange, value,name }: InputProps){
    return <StyledInput type="text" placeholder={placeholder} onChange={onChange} value={value} name={name}/>;
};


