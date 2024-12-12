import P from 'prop-types';

import './styles.css';

export const Input = ({ inputRef, fields, setFields }) => {
  return (
    <input
      id="input-name"
      ref={inputRef}
      type="text"
      placeholder="Digite seu nome"
      onChange={() =>
        inputRef.current.value.length >= 2
          ? setFields({ ...fields, input: true })
          : setFields({ ...fields, input: false })
      }
    />
  );
};

Input.propTypes = {
  inputRef: P.object,
  fields: P.object,
  setFields: P.func,
};
