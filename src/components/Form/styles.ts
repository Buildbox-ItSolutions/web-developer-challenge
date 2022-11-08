import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.grey400};
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.grey.border};
  padding: 24px;
  width: 516px;
  margin-bottom: 56px;

  @media (max-width: 660px) {
    width: 100%;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
