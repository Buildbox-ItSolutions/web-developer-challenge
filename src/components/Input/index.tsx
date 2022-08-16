import { useField } from '@unform/core';
import { RefObject, useEffect, useRef } from 'react';
import { Container } from './styles';

interface IInputProps {
    name: string;
    placeholder: string;
    multilines?: boolean;
    margin?: string;
}

const Input = ({
    name,
    placeholder,
    multilines = false,
    margin = 'none',
}: IInputProps) => {
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: (ref) => {
                return ref.current.value;
            },
            setValue: (ref, value) => {
                ref.current.value = value;
            },
            clearValue: (ref) => {
                ref.current.value = '';
            },
        });
    }, [fieldName, registerField]);

    return (
        <Container margin={margin} error={error}>
            {!multilines && (
                <input
                    ref={inputRef as RefObject<HTMLInputElement>}
                    type="text"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
            )}
            {multilines && (
                <textarea
                    ref={inputRef as RefObject<HTMLTextAreaElement>}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    rows={3}
                />
            )}
        </Container>
    );
};

export default Input;
