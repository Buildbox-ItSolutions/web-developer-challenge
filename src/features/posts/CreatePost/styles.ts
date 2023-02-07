import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  animation: transitionIn 2s;
  background-color: ${props => props.theme.colors.card};
  width: 516px;
  padding: 0 1rem 1rem;
  margin-bottom: 3rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.border};

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
    
    .buttons {
      width: 100%;
      button {
        height: 40px;
        padding: 0 8px;
      }
    }
  }
`;