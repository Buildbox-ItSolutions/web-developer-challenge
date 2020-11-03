import styled from 'styled-components';

export const Container = styled.div`
  max-width: 85%;
  margin: auto;

  @media (min-width: 992px) {
    max-width: 30%;
  }
  @media (min-width: 768px) {
    max-width: 45%;
  }
`;
