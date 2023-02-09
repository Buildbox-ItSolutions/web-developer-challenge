import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
`

export const IconButton = styled.div`
    position: absolute;
    top: 0.75rem;
    right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
  
      background: transparent;
  
      width: 1.25rem;
      height: 1.25rem;
      border: 1px solid ${(props) => props.theme["--red-300"]};
      border-radius:50%;
      color: ${(props) => props.theme["--red-300"]};
  
      svg {
        font-size: 10px;
      }
    }
`;

export const ImageContainer = styled.div`
  margin-top: 2rem;
  img {
    width: 5.5rem;
    height: 5.5rem;

    border-radius: 36px;
  }
`;

export const PostContent =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    strong {
      margin-top: 1.5rem;
      font-size: 0.75rem;
      color: ${(props) => props.theme["--gray-400"]};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["--gray-500"]};
    }
`;
