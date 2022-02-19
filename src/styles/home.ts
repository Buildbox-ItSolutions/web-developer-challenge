import styled from "styled-components";

export const PageAuth = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65%;
    height: 100vh;
    color: #2b2b2b;
    @media screen and (max-width: 1000px) {
      width: 100%;
      height: 50%;
    }
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #343434;
    width: 35%;
    height: 100vh;
    @media screen and (max-width: 1000px) {
      width: 100%;
      height: 50%;
    }
  }
`;

export const IllustrationIMG = styled.img`
  width: 45rem;
  @media (max-width: 1000px) {
    width: 25rem;
  }
`;

export const TextStrong = styled.strong`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 3vw;
  text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
  @media (max-width: 800px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.8rem;
    text-align: center;
  }
`;

export const TextP = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.6vw;
  line-height: 2.5rem;
  margin-top: 1rem;
  color: #303030;
  text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
    margin-top: 0;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoIMG = styled.img`
  width: 25rem; 
  height: 20rem;
`;

export const LoginWithGoogleButton = styled.button`
  font-size: 1.6rem;
  height: 4.5rem;
  width: 30rem;
  border-radius: 0.8rem;
  font-weight: 500;
  background: #6baf04;
  color: #fff;
  padding: 0 0.7rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const GoogleIconIMG = styled.img`
  margin-right: 0.8rem;
`;
