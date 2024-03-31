import styled from "styled-components";

export const Post = styled.div`
  margin-top: 30px;
  height: 353px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  display: flex;
  flex-direction: column;

  .profile-img-content {
    display: flex;
    align-items: center;
    margin: auto;
    .profile-img {
      cursor: pointer;
      height: 88px;
      border-radius: 36px;
      border: 1px solid rgba(75, 75, 75);
      display: flex;
      width: 88px;
      img{
        border-radius: 36px;
        width: 88px;
        object-fit: contain;
      }
      svg {
        color: rgba(75, 75, 75);
        margin: auto;
      }
      &:hover {
        opacity: 0.7;
      }
    }
    .delete-button {
      margin-left: 15px;
      cursor: pointer;
      border: none;
      background: none;
      transition: 200ms;

      &:active {
        transform: scale(0.9);
      }
      svg {
        color: #d65923;
      }
    }
  }

  input {
    height: 30px;
    margin-bottom: 10px;
  }

  input,
  textarea {
    color: #fff;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #494949;
    border: 0;
    resize: none;
  }

  .group-buttons {
    margin-left: auto;
    margin-top: 35px;
    button {
      border: none;
    }
    button:nth-child(1) {
      background: none;
      color: #5f5f5f;
      cursor: pointer;
      text-decoration: underline;
    }

    button:nth-child(2) {
      margin: 0 0 0 24px;
      padding: 12px 24px;
      object-fit: contain;
      border-radius: 8px;
    }
    .active{
      background-color: #71bb00;
      color: #fff;
    }
    .no-active{
      background-color: #5f5f5f;
    }
  }
`;