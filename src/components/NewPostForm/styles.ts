import styled from 'styled-components';

export const PostForm = styled.form`
  max-width: 60rem;
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #313131;
  color: #fff;
  padding: 1rem;
  margin: 2.5rem auto;
  border-radius: 0.5rem;

  label {
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  input {
    background-color: #494949;
    color: #9f9f9f;
    font-size: 1.2rem;
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem;
    outline: none;
  }

  textarea {
    min-height: 8rem;
    background-color: #494949;
    color: #9f9f9f;
    font-size: 1.2rem;
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem;
    outline: none;
    resize: vertical;

    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: #9f9f9f;
      border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb:hover {
      max-height: 10px;
    }
  }

  span {
    font-size: 1rem;
  }
`;

export const PostImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  label {
    width: 6rem;
    height: 6rem;
    color: #9f9f9f;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #9f9f9f;
    border-radius: 1.5rem;
    cursor: pointer;
  }

  picture {
    max-width: 6rem;
    max-height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    overflow: hidden;

    img {
      min-width: 6rem;
      min-height: 6rem;
      object-fit: cover;
      border-radius: 1.5rem;
    }
  }

  button {
    background-color: #313131;
    color: red;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }

  p {
    text-align: center;
  }

  input {
    display: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-top: 1.5rem;

  button {
    height: 3rem;
    background-color: #71bb00;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 0.5rem;
    padding: 0.25rem 1.5rem;
    cursor: pointer;
    outline: none;

    &:nth-child(1) {
      background-color: #313131;
      border: none;
      text-decoration: underline;
      color: #494949;
    }

    &:disabled {
      background-color: #494949;
    }
  }
`;
