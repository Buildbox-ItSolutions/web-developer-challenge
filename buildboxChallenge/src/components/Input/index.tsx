import React, { useRef, useEffect, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core';
import { InputStyled } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    rest?: InputProps;
}

export function Input ({name, ...rest}: InputProps) {
    const inputRef = useRef(null)
    const { fieldName, defaultValue, registerField, error } = useField(name);
    
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
        
    }, [inputRef, registerField])

    return (
        <InputStyled>
            <input
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest}
            />
            {error && <h4 className='error-message'>{error}</h4>}
        </InputStyled>
    )
}