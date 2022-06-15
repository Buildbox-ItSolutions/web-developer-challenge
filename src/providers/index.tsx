import React, { ReactNode } from 'react';
import { DataProvider } from './Data/index';

interface ProviderProps {
    children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
    return (
        <DataProvider>
            {children}
        </DataProvider>
    )
};

export default Providers;