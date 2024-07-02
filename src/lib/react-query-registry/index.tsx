'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryRegistryProps } from './types';

const queryClient = new QueryClient();

export function ReactQueryRegistry({ children }: ReactQueryRegistryProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
