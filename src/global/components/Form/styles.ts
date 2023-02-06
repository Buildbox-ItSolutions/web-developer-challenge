import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.gray['550']};
  background-color: ${({ theme }) => theme.colors.gray['600']};
  padding: 2.4rem;
  border-radius: 0.3rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;

  textarea {
    margin-top: 0.8rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button:last-child {
    margin-left: 1rem;
  }
`;
