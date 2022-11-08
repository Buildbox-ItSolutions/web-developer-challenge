import React from 'react';

import MessageProvider from './MessageContext';

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MessageProvider>{children}</MessageProvider>
);

export default AppProvider;
