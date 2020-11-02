import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  @keyframes transitionIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

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

  div.like {
    align-self: flex-end;

    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin: 0.2rem 0.5rem 0 0;
    }

    button {
      margin: 1px 0 1px 2px;
    }

    button:hover {
      margin: 0;
      transition: 0.5s;
    }

    button > img:hover {
      width: 22px;
      transition: 0.5s;
      cursor: pointer;
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
