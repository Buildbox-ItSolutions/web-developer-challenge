import styled from "styled-components";

export const PostCreationBox = styled.div`
  max-width: 32.25rem;
  max-height: fit-content;

  margin-inline: auto;
  margin-bottom: 3.5rem;
  padding: 1.5rem;

  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color  : #313131;
`

export const PhotoUpload = styled.div`
  max-width: 5.5rem;
  max-height: 5.5rem;
  margin-inline: auto;
  margin-bottom: 1rem;

  border-radius: 2.25rem;
  border: solid 1px #4b4b4b;
  
  padding: 2rem;
  cursor: pointer;

  img {
    max-width: 1.5rem;
    max-height: 1.5rem;
    margin-inline: auto;

  }
`

export const PhotoChoosed = styled.img`
  max-width: 5.5rem;
  max-height: 5.5rem;
  
  margin-inline: auto;
  margin-bottom: 1rem;

  border-radius: 2.25rem;
  border: solid 1px #4b4b4b;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;

  input, textarea {
    border: none;
    height: 2.5rem;
    border-radius: .5rem;
    background-color: #494949;
    outline: none;
    padding: 0.75rem 1rem;
    ::placeholder{
      color: #9f9f9f;
      font-size: 0.875rem;
    }
  }

  input {
    margin-bottom: .5rem;
  }

  textarea {
    resize: none;
    min-height: 5rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  
  button {
    min-width: 6.125rem;
    max-height: 2.563rem;
    border: none;
    border-radius: .5rem;
    background-color: transparent;
    font-size: 0.875rem;
    padding: .75rem 1.5rem;
  }
  
  button:first-child {
    color: #5f5f5f;
    text-decoration: underline;
  }

  button:last-child {
    color: #313131;
    background-color: #5f5f5f;
    margin-left: 1.5rem;
  }
`;
