import React, { FocusEvent, TextareaHTMLAttributes } from 'react';
import Error from '../Error';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    id?: string;
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
    error?: string;
    placeholder: string;
}

const Textarea: React.FC<TextareaProps> = ({
    placeholder,
    id,
    name,
    error,
    onBlur,
    ...rest
}) => {

    return (
        <>
            <textarea
                {...rest}
                id={name}
                name={name}
                cols={30}
                rows={30}
                onBlur={onBlur}
            >
            </textarea>

            {error && <Error error={error} />}
        </>
    )
}

export default Textarea;