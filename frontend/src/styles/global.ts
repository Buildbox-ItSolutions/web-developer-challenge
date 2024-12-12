// External libraries
import { createGlobalStyle } from 'styled-components'

// Styled
import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar-track {
      border-radius: 6px;
    }
    ::-webkit-scrollbar {
      width: 6px;
      height: 10px;
      background: #363636;
      border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #515151;
      border-radius: 6px;
    }
  }

  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};

    font: 400 16px 'Roboto', sans-serif;

    p {
      font-size: 1rem;
      font-family: Roboto;
      color: ${theme.colors.text}
    }

    h1 {
      font-size: 3rem;
      font-family: Roboto;
      color: ${theme.colors.primary};
    }
    h2 {
      font-size: 2.5rem;
      font-family: Roboto;
      color: ${theme.colors.primary};
    }
    h3 {
      font-size: 2rem;
      font-family: Roboto;
      color: ${theme.colors.primary};
    }
    h4 {
      font-size: 1.75rem;
      font-family: Roboto;
      color: ${theme.colors.text};
    }
    h5 {
      font-size: 1.5rem;
      font-family: Roboto;
      font-weight: 600;
      color: ${theme.colors.primary};
    }
    h6 {
      font-size: 1rem;
      font-family: Roboto;
      font-weight: 500;
      color: ${theme.colors.text};
    }
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2.5px);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: calc(100% - 5rem);
    max-width: 576px;
    background: ${theme.colors.gray_250};
    padding: 3rem;
    position: relative;
    border-radius: 1rem;

    @media screen and (max-width: 768px) {
      width: calc(100% - 2.5rem);
      padding-left: 1rem;
      padding-right: 1rem;
    }
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
`
