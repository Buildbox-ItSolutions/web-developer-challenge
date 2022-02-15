import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--backgroundPost);
  padding: 2rem 1rem 1rem 1rem;
  position: relative;
  border: 1px solid #3b3b3b;
  border-radius: 0.187rem;
  margin: 0 1rem;

  > div {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 40%;
    border: 1px solid #3b3b3b;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 40%;
    border: 1px solid #3b3b3b;
    margin: 0 auto;
  }

  > button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.75rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      filter: brightness(1.3);
    }
  }
`

export const Form = styled.form`
  display: flex;
  gap: 1rem;

  @media (max-width: 360px) {
    & {
      flex-direction: column;
    }
  }

  input {
    color: var(--white900);
    background: #494949;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    flex: 1;

    &:focus-visible {
      outline: 1px solid var(--white900);
    }
  }

  button {
    padding: 0 1.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
    color: #fff;
    background: var(--green);
    transition: 0.2s;

    @media (max-width: 360px) {
      & {
        padding: 0.5rem 1.5rem;
      }
    }

    &:hover {
      filter: brightness(1.1);
    }
  }
`
