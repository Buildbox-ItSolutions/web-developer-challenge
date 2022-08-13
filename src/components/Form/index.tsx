import { PostContext, usePostContext } from 'common/context/Post';
import React, { useContext } from 'react';
import Button from '../Button';
import style from './Form.module.scss';

function Form() {
  const { clearNewPost, addPost } = usePostContext();
  const { newPost, setNewPost } = useContext(PostContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost(newPost);
    clearNewPost();
    e.currentTarget.reset();
  };

  const handleNewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setNewPost({ ...newPost, image: reader.result });
      };
    } else {
      setNewPost({ ...newPost, image: null });
    }
  };

  return (
    <form className={style.newPost} onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <input
          type="file"
          name="image"
          accept="image/png, image/gif, image/jpeg"
          onChange={handleNewImage}
          id="image"
          required
        />
        <label htmlFor="image">
          <img
            src={
              newPost.image
                ? newPost.image
                : require('../../assets/img/no-image.png')
            }
            alt="Clique para adicionar uma imagem"
            className={newPost.image ? style.preview : ''}
          />
        </label>
      </div>
      <div className={style.inputWrapper}>
        <input
          type="text"
          name="author"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
          id="author"
          placeholder="Diga seu nome"
          required
        />
      </div>
      <div className={style.inputWrapper}>
        <textarea
          name="message"
          value={newPost.message}
          onChange={(e) => setNewPost({ ...newPost, message: e.target.value })}
          id="message"
          placeholder="Mensagem"
          required
        ></textarea>
      </div>
      <div className={style.buttonsWrapper}>
        <Button type="reset" onClick={clearNewPost}>
          Descartar
        </Button>
        <Button
          type="submit"
          disabled={
            newPost.author && newPost.image && newPost.message ? false : true
          }
        >
          Publicar
        </Button>
      </div>
    </form>
  );
}

export default Form;
