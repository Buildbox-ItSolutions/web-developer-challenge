import React, { ChangeEvent, FocusEvent } from 'react';
import Error from '../Error';

interface InputProps {
    name: string;
    label?: string;
    type: string;
    value: any;
    id?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    id,
    type,
    onChange,
    value,
    name,
    label,
    error,
    onBlur,
    ...rest
}) => {

    return (
        <div>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur} {...rest}
            />
            {error && <Error error={error} />}
        </div>
    )
}

export default Input;