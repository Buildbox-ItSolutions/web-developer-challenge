import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  animation: transitionIn 2s;
  @keyframes transitionIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  background-color: ${props => props.theme.colors.card};

  width: 516px;

  padding: 0 1rem 1rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0.1rem 0.1rem ${props => shade(0.2, props.theme.colors.card)};

  .preview-image {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button {
      background-color: ${props => props.theme.colors.card};

      margin-left: 0.6rem;
      border: none;

      &:hover {
        cursor: pointer;
      }

      img {
        width: 20px;
      }
    }
  }

  .buttons {
    width: 468px;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    button + button {
      margin-left: 1rem;
    }
  }

  & > * {
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    & {
      width: 90vw;
    }

    .buttons {
      width: 100%;
      button {
        height: 40px;
        padding: 0 8px;
      }
    }
  }
`;
