import { useState, useEffect } from 'react';
import PostProps from '../../interface/postProps';

import './post.css';

function Post({ userInputs: { name, message, imageUrl }, id, setFeed }: PostProps) {
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsEntering(false);
    }, 300);
  }, []);

  const deletePostBtn = () => {
    setFeed((prevState) => prevState.filter((post) => post.props.id !== id));
  };

  return (
    <div
      className={`post flex items-start w-[516px] mt-[8px] mb-[16px] bg-mainColor-dark  border border-mainColor-textGrey relative ${
        isEntering ? 'entering' : ''
      }`}
    >
      <button
        className="w-[20px] h-[20px] absolute rounded-full top-[12px] right-[12px] delete-button-box"
        onClick={deletePostBtn}
      ></button>
      <div className="flex mt-[56px]">
        <label
          className="w-[88px] h-[88px] ml-[24px] flex items-center justify-center bg-cover bg-center mb-[16px] rounded-[36px] border border-mainColor-textGrey"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        >
          <img src={imageUrl === '' ? 'src/assets/image.png' : ''} alt="" />
        </label>
        <div className="w-[348px] text-[16px] ml-[32px] mb-[32px]">
          <p className="w-[348px] text-[1rem] mb-[24px] leading-[1.25] roboto-regular text-mainColor-textLightGrey">
            {message}
          </p>
          <p className="text-[12px] text-mainColor-subtitle">Enviado por</p>
          <h1 className="text-[14px] text-mainColor-lightGrey">{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Post;
