import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  background-color: ${({theme}) => theme.colors.black};
  padding: 2.4rem;
`;


export const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1rem;
`;


export const Button = styled.button`
  background-color: transparent;
  >svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({theme}) => theme.colors.errorColor};
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      transform:rotate(180deg);
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Message = styled.span`
  width: 100%;
  color: ${({theme}) => theme.colors.grayLight};
  font-size: 1.6rem;
`;

export const PostInfo = styled.div`
  width: 100%;
  padding-left: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;


`;

export const Author = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  
  > small {
    color: ${({theme}) => theme.colors.gray};
    font-size: 1.2rem;
  }
  
  > p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.colors.grayLight};
  }
`;


export const Photo = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;

  @media (min-width: 380px){
    width: 9rem;
    height: 9rem;
    border-radius: 3rem;
  }
`;