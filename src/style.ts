import styled from "styled-components";

export const Container = styled.div`
  width: 100%; 
  max-width: 600px; 
  margin: 0 auto; 
  text-align: center
`;

export const Header = styled.h1`
  margin-top: 30px; 
  margin-bottom: 20px; 
  font-size: 36px; 
  font-weight: bold;
  border-radius: 8px;
  background-color: #29292e;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 400;
    gap: 0.rem;
    

    input {
      border: 1px solid #202024;
      height: 1.5rem;
      width: 50%;
      border-radius: 8px;
      background-color: #202024;
      margin-top: 0.2rem;
      color: white;
    }

    textarea {
      border: 1px solid #202024;
      height: 5rem;
      width: 50%;
      border-radius: 8px;
      background-color: #202024;
      margin-top: 0.2rem;
      color: white;
      
    }

    button {
    height: 2rem;
    width: 5rem;
    margin-top: 0.5rem;
    border: 0;
    background: #00875F;
    color: white;
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover{
      background: #015F43;
      transition: background-color 0.2s
  }
    }
  }
`;
export const PostHeader = styled.h2`
display: flex;
align-items: flex-start;
margin-top: 20px;
font-size: 20px;
margin-bottom: 0.5rem;
margin-left: 1rem;

`;

export const PostList = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center;
`;

export const Post = styled.div`
  width: 100%; 
  max-width: 600px; 
  margin: 0 auto; 
  margin-top: 1.5rem;
  text-align: justify;
  display: flex; 
  flex-direction: column;
  align-items: flex-start;

  padding: 1rem;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 8px;
  background-color: #29292e;

  h1 {
    margin-bottom: 0.5rem;
  }

  p{
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    display: flex;
    margin-left: 95%;
    background: transparent;
    border: 0;
    color: white;
  }


`;
