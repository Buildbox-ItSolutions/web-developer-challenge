import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  animation: transitionIn 1s;
  
  main {
    padding: 4vh 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .posts-list {
      strong {
        display: inline-block;
        font-weight: bolder;
        margin-bottom: 1rem;
      }

      & div + div {
        margin-top: 1rem;
      }
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
    main {
      padding: 5vw 0;
    }
  }
`;