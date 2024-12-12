import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { AppProviderProps } from '../Interface/react';

export function AppProvider({ children }: AppProviderProps) {
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [imgProfile, setImgProfile] = useState('');
  const [feed, setFeed] = useState([]);

  const context = useMemo(
    () => ({
      userName,
      setUserName,
      userMessage,
      setUserMessage,
      imgProfile,
      setImgProfile,
      feed,
      setFeed,
    }),
    [userName, userMessage, imgProfile, feed],
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
