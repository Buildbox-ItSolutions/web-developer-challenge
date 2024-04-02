import styled from "styled-components";


export const Container = styled.div`
  background-color: #313131;
  color: #71BB00;
  width: 100%;
  max-width: 40rem;
  margin: auto;
  border-radius: 0.5rem;
  border: 1px solid #373737;
  padding: 1rem 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  margin-bottom: 2rem;

  .post-image{
    border-radius: 40%;
    border: 1px solid #494949;
    cursor: pointer;
    margin: auto;
    width: 8rem;
    height: 8rem;
  }
  .change-image-button{
    position: absolute;
    cursor: pointer;
    opacity: 0.8;
    border-radius: 50%;
    background-color: #fff;
    width: 3rem;
    height: 3rem;
  }

  .trash-button{
    cursor: pointer;
    border-radius: 50%;
    width: 2rem;
    color: red;
    position: absolute;
    margin-bottom: 0;
    background-color: transparent;
    margin-top: 3rem;
    margin-left: 0.8rem;
    padding: 0.2rem;
    border: none;
  }
`;

export const Content = styled.div`
  .post-title-input{
    background-color: #494949;
    color: #919191;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    width: 100%;
    margin-top: 1rem;
    padding: 0.7rem;
    text-align: start;
    font-size: 1rem;
  }
  .post-message{
    outline: none;
    background-color: #494949;
    color: #919191;
    border: none;
    overflow: hidden;
    border-radius: 0.5rem;
    text-align: start;
    width: 100%;
    height: 5rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  margin-top: 1rem;

  .remove-button{
    background-color: transparent;
    color: #525252;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 0.8rem;
    border-bottom: #494949;
  }
  .publish-button{
    background-color: #5F5F5F;
    color: #2B2B2B;
    border: none;
    border-radius: 0.5rem;
    padding: 0.7rem;
    width: 8rem;
    cursor: pointer;
    font-size: 1rem;

  }
  .publish-button:hover{
    background-color: #71BB00;
    color: #FFF;
  }
`;

