import styled from "styled-components";

export const IconButton = styled.div`
   display: flex;
    margin: 0;
    justify-content: flex-end;
    align-items: flex-end;
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

export const PostContent =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    gap: 2rem;
`;


export const PostFoooter = styled.div`
   display: flex;
    flex-direction: column;

    margin-top: 1.5rem;
    margin-left: 7.4rem;

    strong {
      font-size: 0.75rem;
      color: ${(props) => props.theme["--gray-400"]};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["--gray-500"]};
    }
`;