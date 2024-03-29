import React, { forwardRef } from 'react';
import styles from './style.module.scss';

export const Textarea = forwardRef(({ error, ...rest }, ref) => {
    return (
        <div className={styles.textareaContainer} >
            <textarea ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </div>
    )
});