import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  animation: transitionIn 1s;
  
  main {
    padding: 10vh 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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