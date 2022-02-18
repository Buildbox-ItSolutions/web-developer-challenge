import styled from "styled-components";

export const VisualizePost = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: top;
`;

export const VisualizePostContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 5.6rem 8.8rem auto;
  background-color: #313131;
  border-radius: 0.8rem;
  width: 51.6rem;
  height: auto;
  margin-bottom: 2.5rem;
  @media (max-width: 550px) {
    width: 95vw;
  }
`;

export const DeleteIconDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const DeleteIconButton = styled.button`
  border: none;
  background: none;
  padding: 1.2rem 1.2rem 0 0;
  cursor: pointer;
`;

export const PostAvatar = styled.div`
  display: flex;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: 2;
  img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;
    @media (max-width: 550px) {
      width: 7.8rem;
      height: 7.8rem;
    }
  }
`;

export const PostText = styled.div`
  grid-column: 2/3;
  grid-row: 2/4;
`;

export const Text = styled.h4`
  word-break: break-word;
  padding: 0 2.6rem 1.2rem 1.2rem;
  color: #9f9f9f;
  font-size: 1.6rem;
  margin-right: 1.2rem;
  border-radius: 0.4rem;
  @media (max-width: 550px) {
    font-size: 1.4rem;
    padding: 0 1.2rem 1.2rem 1.2rem;
  }
`;

export const PostInformation = styled.div`
  grid-column: 1/2;
  padding: 1.2rem 1.2rem;
  @media (max-width: 550px) {
    padding: 1rem 1rem;
  }
  span {
    color: #5f5f5f;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
    @media (max-width: 550px) {
      font-size: 1rem;
    }
  }
  h4 {
    word-break: break-all;
    font-size: 1.4rem;
    color: #7a7a7a;
    @media (max-width: 550px) {
      font-size: 1.2rem;
    }
  }
`;