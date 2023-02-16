import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  width: 100%;
  padding: 1rem 0;

  svg {
    font-size: 4rem;
    margin-right: 1rem;
  }

  .message-content {
    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      color: ${props => props.theme.colors.primaryFont};
      
      margin-bottom: 0.5rem;
    }

    p {
      color: ${props => props.theme.colors.font};
    }
  }
`;
