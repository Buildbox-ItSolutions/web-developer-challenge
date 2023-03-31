import styled from "styled-components";

export const FormsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 45px 0;
  background: #343434;

  @media (max-width: 500px) {
    padding: 45px 10px;
  }
`

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  width: 516px;

  padding: 25px;

  background: #313131;
  border: solid 1px #3b3b3b;

  .container-image {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    padding-left: 30px;

    .delete-image {
      height: fit-content;
      background: transparent;
      border: none;
      font-size: 1rem;
      color: #ef4444;
      cursor: pointer;
      margin: 0 0 8px 15px;
    }
  }

  .button-input {
    width: 88px;
    height: 88px;
    margin: 0 auto 16px;

    background: ${props => props.image === undefined ? 'transparent' : `url(${props.image}) no-repeat`};
    background-size: cover;
    background-position: center;
    border: solid 2px #3b3b3b;
    border-radius: 30px;
    cursor: pointer;

    input {
      display: none;
    }
  }

  .inputs-texts {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .input {
      padding: 18px 12px;
      
      outline: 0;
      border: solid 1px #3b3b3b;
      background: #494949;
      border-radius: 8px;
      color: white;
      font-family: Roboto;
      font-size: 1rem;
    }

    .input-message {
      height: 80px;
      resize: none;
    }
  }

  .action-button {
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
    gap: 20px;

    button {
      display: flex;
      justify-content: center;
      width: 98px;
      height: 41px;
      padding: 12px 0;
      cursor: pointer;
      
      border-radius: 8px;
      border: 0;
    }

    .button-trash {
      text-decoration: underline;
      color: gray;
      background: transparent;
    }

    .button-post {
      color: white;
      background: #71BB00;
    }
  }

  @media (max-width: 500px) {
   width: 100%; 
  }
`