import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px Roboto, sans-serif;
  }

  body {
    background-color: ${props => props.theme.colors.page};
    color: ${props => props.theme.colors.font};
    overflow-x: hidden;
  }

  .react-toastfy-container {
    width: 30%;

    button {
      margin: 0.5rem;

      svg {
        color: white;
      }
    }

    @media (max-width: 1080px) {
      width: 100%;
    }
  }

  .react-toastfy-content {
    font: 500 1rem "Roboto";
    background-color: ${props => props.theme.colors.border};
    width: 100%;
    padding: 0;
  }
`;