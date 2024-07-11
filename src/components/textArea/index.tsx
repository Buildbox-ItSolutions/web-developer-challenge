import React from 'react';
import { StyledTextArea, TextProps } from './style';

export default function TextArea ({ placeholder, onChange, value,name , id}: TextProps){
    return <StyledTextArea  placeholder={placeholder} onChange={onChange} value={value} name={name} id={id}/>;
};


