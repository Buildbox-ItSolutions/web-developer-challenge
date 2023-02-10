import styled, {keyframes} from "styled-components";

const entryList = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`

  max-width: 51.6rem;
  margin: 0 auto 1.6rem auto;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  border: 1px solid ${props => props.theme["gray-600"]};
  background-color: ${props => props.theme["gray-700"]};
  border-radius: 3px;
  gap: 8px;
  animation: ${entryList} 0.9s ease-in-out;

  .deletePost {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    cursor: pointer;
  }

  .container-content{
    display: flex;
    gap: 3.2rem;
    margin-top: 2.4rem;
    width: 100%;


    .photo-base {
      width: 8.8rem;
      height: 8.8rem;
      object-fit: contain;
      border-radius: 36px;
    }

    p {
      font-size: 1.6rem;
      color: ${props => props.theme["gray-300"]};
      text-align: left;
      margin-bottom: 2.4rem;
      word-wrap: break-word;
    }

    .content {
      max-width: 35rem;
    }

    span {
      display: block;
      font-size: 1.2rem;
      font-weight: 500;
      text-align: left;
      color: ${props => props.theme["gray-400"]};
      margin-bottom: 2px;
    }

    small {
      display: block;
      font-size: 1.4rem;
      color: ${props => props.theme["gray-100"]};
      margin-bottom: 1rem;
    }
  }
`;
