import React, { useContext } from 'react';
import Context from '../context/context';
import imageUser from '../images/image.svg';

function forms() {
  const {
    name, message, setName, setMessage, image, setImage, setAllFeed, allFeed,
  } = useContext(Context);

  function cleanFields(event) {
    event.preventDefault();
    setName('');
    setMessage('');
    setImage(imageUser);
  }

  function validateFields() {
    return !(name && message);
  }

  function submitPost(event) {
    event.preventDefault();

    const obj = [
      name,
      message,
      image,
    ];

    setAllFeed([obj, ...allFeed]);

    setName('');
    setMessage('');
    setImage(imageUser);
  }

  return (
    <div>
      <form onSubmit={submitPost}>
        <label htmlFor="image">
          <img
            alt="userImage"
            src={!image ? imageUser : image}
          />
          <input
            type="file"
            onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))}
          />
        </label>
        <input
          value={name}
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={message}
          type="text"
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          onClick={cleanFields}
        >
          Descartar
        </button>
        <button
          type="submit"
          disabled={validateFields()}
        >
          Publicar
        </button>
      </form>
    </div>
  );
}

export default forms;
