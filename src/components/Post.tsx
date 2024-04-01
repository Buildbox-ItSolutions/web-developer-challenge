import React from "react";
import styled from 'styled-components';
import deleteIcon from '../assets/delete-icon/delete@3x.png';

const StyledPost = styled.div` 
    width: 100%;
    box-sizing: border-box;

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

    .post__area {
      padding: 1rem;
      border-radius: 0.1rem;
      border: solid 0.1rem #494949;
      background-color: var(--black);
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
      justify-content: left;
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
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }

    @media only screen and (min-width: 1200px) {
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
      <div className="post__area">
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
      </div>
    </StyledPost>
  );
}

export default Post;
