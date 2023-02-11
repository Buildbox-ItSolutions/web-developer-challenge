import React, { useState, useRef, useEffect, useContext } from 'react';

import preview from '../assets/preview.png';
import PostContext from '../context/PostContext';
import FormFields from './FormFields';

const CreatePost = () => {
  const {
    setIsDisabled,
    posts,
    setPosts,
    loadedImage,
    setLoadedImage,
    form,
    setForm,
  } = useContext(PostContext);
  const fileInputRef = useRef();

  useEffect(() => {
    if (loadedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(loadedImage);
    } else {
      setForm({ ...form, image: null });
    }
  }, [loadedImage]);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      setLoadedImage(file);
    } else {
      setLoadedImage(null);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (form.name.length <= 0 || form.postText.length <= 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, form]);

    setForm({
      name: '',
      postText: '',
      image: null,
    });
    setIsDisabled(true);
  };

  const clearForm = () => {
    setForm({
      name: '',
      postText: '',
      image: null,
    });
  };

  return (
    <section className='flex justify-center'>
      <FormFields
        imageHandler={imageHandler}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        clearForm={clearForm}
      />
    </section>
  );
};

export default CreatePost;
