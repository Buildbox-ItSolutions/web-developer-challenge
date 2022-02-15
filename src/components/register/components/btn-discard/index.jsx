import P from 'prop-types';

import './styles.css';

export const BtnDiscard = ({ inputRef, textareaRef, setFields }) => {
  const handleClick = () => {
    inputRef.current.value = '';
    textareaRef.current.value = '';
    setFields({ input: false, textarea: false, photo: false });
  };
  return (
    <button className="btn-discard" onClick={() => handleClick()}>
      Descartar
    </button>
  );
};

BtnDiscard.propTypes = {
  inputRef: P.object,
  textareaRef: P.object,
  fields: P.object,
  setFields: P.func,
};
