import styled from 'styled-components';

export const Container = styled.div`
  animation: transitionIn 1s;
  @keyframes transitionIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  width: 100vw;

  main {
    padding: 10vh 10vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    main {
      padding: 5vw 0;
    }
  }
`;
