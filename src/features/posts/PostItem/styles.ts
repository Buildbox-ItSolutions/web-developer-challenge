import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  animation: transitionIn 4s;
  background-color: ${props => props.theme.colors.card};
  width: 516px;
  margin-top: 10vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: 0.1px solid ${props => props.theme.colors.input};
  border-radius: 8px;
  box-shadow: 0.1rem 0.1rem ${props => shade(0.2, props.theme.colors.card)};

  button {
    background-color: ${props => props.theme.colors.card};
    border: none;
    align-self: flex-end;

    &:hover {
      cursor: pointer;
    }

    img {
      width: 20px;
    }
  }

  .post-data {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0.5rem 0;
    padding-right: 2rem;

    img {
      margin: 0 1rem 0 0;
      width: 88px;
      height: 88px;
      border-radius: 36px;
    }

    p {
      margin-bottom: 1rem;
    }

    span {
      color: ${props => props.theme.colors.disabled};
    }

    .sent-by {
      font-size: 0.8rem;
    }

    .author {
      font-size: 0.9rem;
    }
  }

  @keyframes transitionIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    & {
      width: 90vw;
    }

    .post-data {
      flex-direction: column;
      align-items: center;
      padding: 0;
      img {
        margin: 0 0 1rem 0;
      }
      text-align: center;
    }
  }
`;