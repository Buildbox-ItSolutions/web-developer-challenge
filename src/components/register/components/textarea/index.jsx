import P from 'prop-types';

import './styles.css';

export const Textarea = ({ textareaRef, fields, setFields }) => {
  return (
    <textarea
      id="text-message"
      ref={textareaRef}
      placeholder="Mensagem"
      onChange={() =>
        textareaRef.current.value.length >= 1
          ? setFields({ ...fields, textarea: true })
          : setFields({ ...fields, textarea: false })
      }
    ></textarea>
  );
};

Textarea.propTypes = {
  textareaRef: P.object,
  fields: P.object,
  setFields: P.func,
};
