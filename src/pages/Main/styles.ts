import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 660px) {
    width: 100%;
    padding: 0 15px;
  }
`;
