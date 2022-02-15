import styled from 'styled-components'

interface FormProps {
  onSubmit: any
  action: any
  isReady: boolean
}

export const FormContainer = styled.div`
  background: var(--backgroundPost);
  padding: 1.5rem;
  border: 1px solid #3b3b3b;
`

export const EmpityAvatar = styled.button`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 40%;
  border: 1px solid #3b3b3b;
  margin: 0 auto;
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:after {
    content: 'Adicionar Avatar';
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: var(--green);
    color: #fff;
    border-radius: 40%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    animation: show 0.3s forwards;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Avatar = styled.div`
  width: fit-content;
  margin: 0 auto;
  position: relative;

  > img {
    display: block;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 40%;
    border: 1px solid #3b3b3b;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
    position: absolute;
    top: 35%;
    left: 110%;
    transition: 0.2;

    &:hover {
      filter: brightness(1.2);
    }
  }
`

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  input,
  textarea {
    color: var(--white900);
    background: #494949;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;

    &:focus-visible {
      outline: 1px solid var(--white900);
    }
  }

  input {
    margin-bottom: 0.5rem;
  }

  > div {
    margin-top: 2rem;
    align-self: flex-end;

    button {
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      font-size: 0.875rem;
    }

    button:first-child {
      background: none;
      color: var(--white100);
      text-decoration: underline;
      transition: 0.2s;

      &:hover {
        filter: brightness(1.3);
      }
    }

    button:last-child {
      background-color: ${({ isReady }) =>
        isReady ? 'var(--green)' : 'var(--white100)'};
      color: ${({ isReady }) => (isReady ? '#fff' : 'var(--backgroundPost)')};
    }
  }
`
