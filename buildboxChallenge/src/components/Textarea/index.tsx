import React, { useRef, useEffect, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core';
import { TextAreaStyled } from './style';

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    rest?: InputProps;
}

export function Textarea ({name, ...rest}: InputProps) {
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
        <TextAreaStyled>
            <textarea
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                rows={10}
                {...rest}
            />
            {error && <h4 className="error-message">{error}</h4>}
        </TextAreaStyled>
    )
}