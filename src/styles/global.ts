import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
      --white: #9f9f9f;
      --light-gray: #494949;
      --grey: #343434;
      --grey-200: #3b3b3b;
      --black: #2b2b2b;
      --black-200: #313131;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  @media (max-width: 1080px){
      html{
          font-size: 93.75%;
      }
  }

  @media (max-width: 720px){
      html{
          font-size: 87.5%;
      }
  }

  body {
    font: 1rem 'Roboto', sans-serif;
    background: var(--grey);
    color: var(--white);
  }

  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }

  button{
    font: 1rem 'Roboto', sans-serif;
    cursor: pointer;
    border: none;     
  }

  .btn{
    border-radius: 8px;
    padding: 0.9rem 3rem;
    transition: 0.2s;
    &:hover{
      filter: brightness(0.8);
    }
  }  

  .btn-primary{
    background: #5f5f5f;
    color: var(--black-200);
  }

  .form-control{
    width: 100%;
    border-radius: 8px;
    background: var(--light-gray);
    border: none;
    /* caret-color: var(--white); */
    color: var(--white);
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--white);
    }
  } 

    textarea{        
      padding: 0.5rem 1.5rem;      
    }

    input {
      padding: 0 1.5rem;
      height: 3.5rem;      
    }
`;