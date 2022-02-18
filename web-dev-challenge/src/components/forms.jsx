import React, { useContext } from 'react';
import Context from '../context/context';
import imageUser from '../images/image.svg';
import { DivForm } from '../style/formsStyle';

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
    <DivForm>
      <form onSubmit={submitPost}>
        <label htmlFor="image" className="imageDetails">
          <img
            className="userImage"
            alt="userImage"
            src={!image ? imageUser : image}
          />
          <input
            id="image"
            type="file"
            onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))}
          />
        </label>
        <input
          value={name}
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          className="nameArea"
        />
        <input
          value={message}
          type="text"
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          className="messageArea"
        />
        <div className="btnFlex">
          <button
            type="button"
            onClick={cleanFields}
            className="descartarBtn"
          >
            Descartar
          </button>
          <button
            type="submit"
            disabled={validateFields()}
            className="publicarBtn"
          >
            Publicar
          </button>
        </div>
      </form>
    </DivForm>
  );
}

export default forms;
