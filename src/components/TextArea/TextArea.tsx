import React from 'react';
import { TextAreaContainer } from './styles';

const TextArea:React.FC<React.HTMLProps<HTMLTextAreaElement>> = (props) => {
    return (
        <TextAreaContainer {...props} />
    );
}

export default TextArea;