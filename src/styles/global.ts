import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
   scroll-behavior: smooth;

   @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.colors.gray[400]};
  }

  html, body, #root, main {
    min-height: 100%;
    height: 100%;
  }

  body, input, button, textarea {
    font-family: 'Open Sans', sans-serif;
  }

  button, input, select{
    outline: none;
    &:focus {
      outline: transparent !important;
    }
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none !important;
  }

  [disabled] {
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .react-modal-content {
    width: 98%;
    max-width: 476px;
    background: ${({ theme }) => theme.colors.gray[500]};
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
    border: 0;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
