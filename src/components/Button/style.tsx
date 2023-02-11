import styled from 'styled-components'

export const Button = styled.button<{ isLink: boolean; isEnable: boolean }>`
  width: 100%;
  max-width: 98px;
  height: 41px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-weight: normal;
  color: ${(props) =>
    props.isLink ? 'var(--black-four)' : 'var(--black-two)'};
  text-decoration: ${(props) => (props.isLink ? 'underline' : 'none')};
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isLink ? 'transparent' : 'var(--black-four)'};
  background-color: ${(props) => props.isEnable && 'var(--button-enable)'};
  color: ${(props) => props.isEnable && '#ffffff'};
  transition: background 0.3s ease-in-out;

  @media only screen and (max-width: 400px) {
    & {
      width: 100%;
      max-width: 100%;
    }
  }
`
