import { useContext } from 'react';

import { MessagesContext, MessagesContextDataProps } from '../contexts/MessagesContext';

export function useMessage(): MessagesContextDataProps {
  const context = useContext(MessagesContext);

  return context;
}