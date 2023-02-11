import React, { useRef, useContext } from 'react';
import preview from '../assets/preview.png';
import PostContext from '../context/PostContext';

const FormFields = ({
  // refButtonHandler,
  imageHandler,
  handleChange,
  handleSubmit,
  clearForm,
}) => {
  const fileInputRef = useRef();

  const { isDisabled, form } = useContext(PostContext);

  const refButtonHandler = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <form
      className='w-2/5 bg-[#313131] p-4 items-center flex-col'
      onSubmit={handleSubmit}
    >
      <input
        className='justify-center'
        type='file'
        style={{ display: 'none' }}
        ref={fileInputRef}
        accept='image/*'
        onChange={imageHandler}
      />

      {form.image ? (
        <div className='flex justify-center'>
          <img
            src={form.image}
            className='rounded-lg w-24 justify-center'
            alt='user image'
          />
        </div>
      ) : (
        <div className='flex justify-center'>
          <img
            src={preview}
            className='cursor-pointer rounded-lg w-24'
            alt='default image'
            onClick={refButtonHandler}
          />
        </div>
      )}

      <div className='flex flex-col items-center'>
        <input
          value={form.name}
          type='text'
          name='name'
          className='form-control
          block
          w-96
          px-2
          py-2
          text-sm
          font-normal
          bg-[#494949] bg-clip-padding
          border border-solid border-[#494949]
          rounded
          mt-5
          placeholder-[#9f9f9f] focus:border-blue-600 focus:outline-none'
          placeholder='Digite seu nome'
          onChange={handleChange}
        />
        <textarea
          value={form.postText}
          id='message'
          name='postText'
          rows='4'
          className='bg-[#494949] placeholder-[#9f9f9f] mt-3 block p-2.5 w-96 shadow-sm border-slate-300 focus:outline-none block rounded-md sm:text-sm focus:ring-2'
          placeholder='Mensagem'
          onChange={handleChange}
        ></textarea>
      </div>

      <div className='flex items-center justify-end space-x-4'>
        <p className='mt-5 underline cursor-pointer' onClick={clearForm}>
          Descartar
        </p>
        <button
          style={isDisabled ? { backgroundColor: '#5f5f5f' } : null}
          disabled={isDisabled}
          type='submit'
          onChange={handleChange}
          className='mt-5 w-32 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
        >
          Publicar
        </button>
      </div>
    </form>
  );
};

export default FormFields;
