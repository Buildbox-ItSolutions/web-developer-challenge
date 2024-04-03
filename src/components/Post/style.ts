import styled, { keyframes } from "styled-components";

export const PostContainer = styled.div`
  margin-bottom: 5rem;
  background-color: #313131;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid #3b3b3b;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: #d65923;
    cursor: pointer;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.5rem;
    height: 5.5rem;
    margin: 0 .5rem 1rem 11.875rem;
    padding: 2rem;
    object-fit: contain;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);

    button {
      border: none;
      cursor: pointer;
      background-color: transparent;
      color: #fff;
    }

    img {
      width: 5.5rem;
      height: 5.5rem;
      object-fit: contain;
      border-radius: 36px;
    }
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 1rem;
  gap: 8px;

  input {
    outline: none;
    border: none;
    width: 29.25rem;
    height: 2.5rem;
    padding: 0.75rem;
    border-radius: 8px;
    background-color: #494949;
    color: #fff;
    font-size: 0.875rem;
    line-height: 129%;
  }
  textarea {
    outline: none;
    border: none;
    resize: none;
    height: 5rem;
    padding: 0.75rem;
    border-radius: 8px;
    background-color: #494949;
    color: #fff;
    font-size: 0.875rem;
  }
`;

export const Pulse = keyframes`
0% {
    background-color: #ACCEF7;
    opacity:0.7;
  }
  50% {
    background-color: #ACCEF7;
    opacity:0.7;
  }
  100% {
    background-color: #ACCEF7;
    opacity:0.7;
  }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;

  a {
    font-size: .875rem;
    line-height: 129%;
    color: #5f5f5f;
    text-decoration:underline;
    cursor: pointer;
  }

  button {
    border: none;
    padding: .75rem 1.5rem;
    border-radius: 8px;
    background-color: #71bb00;
    cursor: pointer;
    font-size: .875rem;
    line-height: 129%;
    color: #fff;
  }

  button:disabled{
      background-color: #5f5f5f;
      opacity: 0.4;
      cursor: not-allowed;
      color: #313131;
    }

    .focus {
      animation: ${Pulse} 1s ease;
    }
`;
