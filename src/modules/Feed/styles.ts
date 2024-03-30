import styled from "styled-components";

export const Container = styled.div`
  background-color: #343434;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  background-color: #313131;
  width: 40vw;
  height: 50vh;
  margin: 40px 425px 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImagePost = styled.div`
  width: 88px;
  height: 88px;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px rgba(75, 75, 75);
  background-color: rgba(75, 75, 75, 0);
`;

export const ImagePost = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;
