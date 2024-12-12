import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import imageUser from '../images/image.svg';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState(imageUser);
  const [message, setMessage] = useState('');
  const [allFeed, setAllFeed] = useState([]);

  return (
    <div>
      <Context.Provider
        value={{
          name, setName, message, setMessage, image, setImage, allFeed, setAllFeed,
        }}
      >
        { children }
      </Context.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
