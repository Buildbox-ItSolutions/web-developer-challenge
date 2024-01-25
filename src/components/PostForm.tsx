import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostInterface } from '../interfaces/PostInterface';
import { addPost } from '../redux/Postactions';

const PostForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('img.png');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: PostInterface = {
      id: Date.now(),
      name,
      message,
      photo
    };
    dispatch(addPost(newPost));
    handleReset();
  };

  const handleReset = () => {
    setName('');
    setMessage('');
    setPhoto('img.png');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
          <div className="col-span-full">
            <div className="mt-2 flex items-center gap-x-3">
              <img
                src={photo}
                alt=""
                className="h-12 w-12 p-1 rounded-full bg-gray-50"
              />
              <button
                type="button"
                onClick={() => setPhoto('logo192.png')}
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                data-testid="select-photo-button"
              >
                Selecionar Foto
              </button>
            </div>
          </div>
          <div className="col-span-full">
            <div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                required
              />
            </div>
          </div>
          <div className="col-span-full">
            <div>
              <textarea
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mensagem"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={handleReset}
          data-testid="discard-button"
        >
          Descartar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          data-testid="publish-button"
        >
          Publicar
        </button>
      </div>
    </form>
  );
};

export default PostForm;
