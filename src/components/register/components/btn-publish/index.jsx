import P from 'prop-types';

import { useContext } from 'react';

import { Context } from '../../../../contexts/homeContext';
import './styles.css';

import './styles.css';

export const BtnPublish = ({ inputRef, textareaRef, disabled, nextPhoto }) => {
  const context = useContext(Context);

  return (
    <button
      className="btn-publish"
      onClick={() => context.dispatch({ type: ['add', nextPhoto, inputRef.current.value, textareaRef.current.value] })}
      disabled={disabled}
    >
      Publicar
    </button>
  );
};

BtnPublish.propTypes = {
  inputRef: P.object,
  textareaRef: P.object,
  disabled: P.bool,
  nextPhoto: P.string,
};
