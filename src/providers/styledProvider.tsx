import React, { ReactChild, ReactChildren, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const StyledProvider = (children: any) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}