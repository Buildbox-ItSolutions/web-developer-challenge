import React, { useRef, useEffect, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core';


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
        <>
            <input
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest}
            />
            {error && <h4>{error}</h4>}
        </>
    )
}