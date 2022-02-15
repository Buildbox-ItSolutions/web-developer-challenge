import React, { useRef, useState } from 'react';

import { BtnPublish } from '../components/btn-publish';
import { Input } from '../components/input';
import { Textarea } from '../components/textarea';
import { BtnDiscard } from '../components/btn-discard';

import './styles.css';
import { PhotoUpload } from '../components/photoUpload';
import { photo } from '../../../contexts/homeContext/data';

function Register() {
  const inputRef = useRef();
  const textareaRef = useRef();

  const [fields, setFields] = useState({
    input: false,
    textarea: false,
    photo: false,
  });

  const [counter, setCounter] = useState(0);

  const limitCounter = counter >= 3 ? setCounter(0) : counter;

  const nextPhoto = photo[limitCounter];

  const disabled = fields.input && fields.textarea && fields.photo ? false : true;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <PhotoUpload setCounter={setCounter} nextPhoto={nextPhoto} fields={fields} setFields={setFields} />
      <Input inputRef={inputRef} fields={fields} setFields={setFields} />
      <Textarea textareaRef={textareaRef} fields={fields} setFields={setFields} />

      <div className="btn-group">
        <BtnDiscard inputRef={inputRef} textareaRef={textareaRef} fields={fields} setFields={setFields} />
        <BtnPublish inputRef={inputRef} textareaRef={textareaRef} disabled={disabled} nextPhoto={nextPhoto} />
      </div>
    </form>
  );
}

export default Register;
