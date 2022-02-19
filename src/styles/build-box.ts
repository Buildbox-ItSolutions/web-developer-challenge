import styled from "styled-components";

export const PageBuildBox = styled.div`
  width: 100%;
  height: 100%;
  background: #343434;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 9.3rem;
  background-color: #2b2b2b;
  justify-content: center;
  cursor: pointer;
  img {
    width: 10.3rem;
  }
`;

export const MainContent = styled.div`
  background-color: #343434;
  width: 100%;
  height: auto;
`;

export const MainCreatePost = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  main {
    background-color: #313131;
    border-radius: 0.8rem;
    width: 51.6rem;
    height: 35.3rem;
    margin-top: 4rem;
    @media (max-width: 550px) {
      width: 95vw;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const PhotoUploadImg = styled.img`
  width: 8.8rem;
  padding-top: 2.4rem;
  padding-bottom: 1.6rem;
`;

export const UserAvatarImg = styled.img`
  width: 8.8rem;
  padding-top: 2.4rem;
  padding-bottom: 1.6rem;
  border-radius: 50%;
`;

export const InputName = styled.input`
  width: 46.8rem;
  height: 4rem;
  border: none;
  border-radius: 0.8rem;
  background-color: #494949;
  color: #9f9f9f;
  font-size: 14px;
  padding: 1.2rem 1.6rem 1.2rem 1.6rem;
  @media (max-width: 550px) {
    width: 85vw;
  }
`;

export const TextAreaPost = styled.textarea`
  width: 46.8rem;
  height: 8rem;
  border: none;
  border-radius: 0.8rem;
  background-color: #494949;
  color: #9f9f9f;
  font-size: 14px;
  padding: 1.2rem 1.6rem 5.1rem 1.6rem;
  margin-top: 0.8rem;
  margin-bottom: 3.2rem;
  resize: none;
  @media (max-width: 550px) {
    width: 85vw;
  }
`;

export const CreatePostButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 31rem;
  width: 100%;
  @media (max-width: 550px) {
    justify-content: center;
    padding-left: 0;
  }
`;

export const DiscardButton = styled.button`
  border: none;
  background: none;
  font-size: 1.4rem;
  margin: 1.2rem 2.4rem 1.2rem 0;
  color: #5f5f5f;
  border-bottom: 0.1rem solid #5f5f5f;
  opacity: 1;
  transition: opacity 0.2s;
  :hover {
    opacity: 0.8;
  }
`;

export const PublishButton = styled.button`
  border: none;
  background-color: #5f5f5f;
  color: #313131;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  margin: 0 2.4rem 0 0;
  opacity: 1;
  transition: opacity 0.2s;
  :hover {
    opacity: 0.8;
  }
  @media (max-width: 550px) {
    margin: 0 0 0 0;
  }
`;

export const DivSpan = styled.div`
  display: flex;
  width: 100%;
  height: 8rem;
  justify-content: center;
  align-items: end;
  span {
    padding-bottom: 0.8rem;
    width: 51.6rem;
    font-size: 1.4rem;
    color: #7a7a7a;
    font-weight: 500;
    @media (max-width: 550px) {
      width: 95vw;
    }
  }
`;


