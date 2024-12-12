
import React from 'react';

interface ErrorProps {
    error: string
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <p style={{ color: '#f31', margin: ' 0.3rem 0px', textAlign: 'left' }} >
            {error}
        </p>
    );
}

export default Error;