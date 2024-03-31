import React from "react";
import styled from 'styled-components';
import deleteIcon from '../assets/delete-icon/delete@3x.png';

const StyledPost = styled.div` 
    width: 100%;
    margin: auto;
    padding: 0 16px; 
    box-sizing: border-box;
    border-radius: 0.1rem;
    border: solid 0.5rem #3b3b3b;
    background-color: var(--black);
    margin-top: 2rem;

    .post__image {
      width: 25%;
      height: 7rem;
      cursor: pointer;
      border-radius: 1.9rem;
      margin: 1rem 0;
    }

    .post__message-content {
      padding: 0 1.5rem;
      line-height: 1.25;
      color: var(--warm-grey-three);
    }

    .post__send-by{
      padding: 0 1.5rem;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: 0.29px;
      text-align: left;
      color: #5f5f5f;
    }

    .post__name-content {
      padding: 0 1.5rem;
      line-height: 1.29;
      text-align: left;
      color: var(--warm-grey-two);
    }

    .post__delete-button{
      width: 100%;
      display: flex;
      justify-content: right;
      background: none;
      border: none;
      margin-top: 1.5rem;
    }

    .post__delete-icon {
      width: 8%;
    }

    .post__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 2rem 0;
    }

    .post__text-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .post__send-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media only screen and (min-width: 1200px) {
        max-width: 45%;
        margin: auto;

        .post__delete-icon {
          width: 4%;
        }

        .post__content {
          flex-direction: row;
        }

        .post__image {
          align-self: flex-start;
          margin: 0;
        }
    }
`;

const Post: React.FC<IPostProps> = ({ id, name, message, imageUrl, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <StyledPost>
      <button className="post__delete-button" onClick={handleClick}>
        <img src={deleteIcon} alt="Delete" className="post__delete-icon" />
      </button>
      <div className="post__content">
        {imageUrl && (
            <img src={imageUrl} alt="Post" className="post__image" />
        )}
        <div className="post__text-content">
          <p className="post__message-content">{message}</p>
          <div className="post__send-content">
            <p className="post__send-by">Enviado por: </p>
            <p className="post__name-content">{name}</p>
          </div>
        </div>
      </div>
    </StyledPost>
  );
}

export default Post;
