import styled, { css } from 'styled-components';


interface IButton {
  background: string,
  color: string,
  padding: string,
  textDecoration?: string
  bRadius?: string
}

export const Container = styled.div`
  max-width: 62rem;
  height: 42rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.gray[400]};
  margin: 5rem auto;
  padding: 2.4rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.gray[100]};
    padding: 3.2rem;
    border-radius: 40%;
    cursor: pointer;
  } 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  padding-top: 1.5rem;
`


export const Button = styled.button<IButton>`
  ${({ background, color, padding, textDecoration, bRadius }) => css`
    background: ${background};
    width: 12rem;
    color: ${color};
    padding: ${padding};
    cursor: pointer;
    text-decoration: ${textDecoration};
    border-radius: ${bRadius};
  `}
`