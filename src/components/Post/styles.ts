import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background: ${props => props.theme.colors["gray-200"]};
  border: 1px solid ${props => props.theme.colors["gray-400"]};
  border-radius: 3px;
  width: 516px;
  padding: 0.75rem 0.75rem 2rem 1.5rem;
  position: relative;
  gap: 2rem;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    width: 400px;
  }

  @media screen and (max-width: 425px) {
    width: 325px;
    flex-direction: column;
  }

  @media screen and (max-width: 330px) {
    width: 225px;
    flex-direction: column;
  }

  .icon {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0.5rem 0.5rem 0 0;
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.orange};
    cursor: pointer;
  }

  img {
    width: 88px;
    height: 88px;
    border-radius: 36px;
  }

  div {
    margin-top: 1.5rem;
    max-width: 348px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;

    @media screen and (max-width: 540px) {
      margin-top: 0;
    }

    .message {
      color: ${props => props.theme.colors["gray-800"]};
    }

    .sendBy {
      font-size: 0.75rem;
      font-weight: 500;
      margin-top: 1.5rem;
      color: ${props => props.theme.colors["gray-600"]};

      @media screen and (max-width: 540px) {
        margin-top: 0.875rem;
      }
    }

    .sendBy + p {
      color: ${props => props.theme.colors["gray-700"]};
      font-size: 0.875rem;
    }
  }
`