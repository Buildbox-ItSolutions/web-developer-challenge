import styled from "styled-components";

export const HomeContainer = styled.form`
  background: ${props => props.theme.colors["gray-200"]};
  border: 1px solid ${props => props.theme.colors["gray-400"]};
  padding: 1.5rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 516px;
  height: 353px;

  @media screen and (max-width: 540px) {
    width: 400px;
  }

  @media screen and (max-width: 425px) {
    width: 325px;
  }

  @media screen and (max-width: 330px) {
    width: 225px;
  }

  .labelInput {
    width: 88px;
    height: 88px;
    padding: 2rem;
    border: 1px solid ${props => props.theme.colors["gray-550"]};
    border-radius: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .icon {
      color: ${props => props.theme.colors.white};
      width: 24px;
      height: 24px;
    }
  }

  input[type="file"] {
    display: none;
  }

  input {
    background: ${props => props.theme.colors["gray-500"]};
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    padding-left: 1rem;
    color: ${props => props.theme.colors.white};
  }

  textarea {
    background: ${props => props.theme.colors["gray-500"]};
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 80px;
    padding: 0.75rem 1rem;
    color: ${props => props.theme.colors.white};
    font-family: Roboto, sans-serif;
  }

  div {
    margin: 1rem 0 0 auto;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media screen and (max-width: 425px) {
      gap: 1rem;
    }

    @media screen and (max-width: 330px) {
      gap: 0.875rem;
    }

    button[type="submit"] {
      background: ${props => props.theme.colors["green-300"]};
      padding: 0.75rem 1.25rem;
      border: 0;
      border-radius: 8px;
      color: ${props => props.theme.colors.white};
      font-size: 0.875rem;
      cursor: pointer;

      @media screen and (max-width: 540px) {
        padding: 0.75rem 1rem;
      }

      @media screen and (max-width: 425px) {
        padding: 0.75rem 0.75rem;
        font-size: 0.875rem;
      }

      @media screen and (max-width: 330px) {
        padding: 0.75rem 0.625rem;
        font-size: 0.75rem;
      }

      &:disabled {
        background: ${props => props.theme.colors["gray-600"]};
        border-radius: 8px;
        color: ${props => props.theme.colors["gray-200"]};
        cursor: not-allowed;
      }
    }

    button[type="button"] {
      color: ${props => props.theme.colors["gray-600"]};
      background: transparent;
      border: 0;
      text-decoration: underline;
      font-size: 0.875rem;
      cursor: pointer;

      @media screen and (max-width: 425px) {
        font-size: 0.75rem;
      }

      @media screen and (max-width: 330px) {
        font-size: 0.625rem;
      }
    }
  }
`

export const ImageContainer = styled.label`
  display: flex;
  align-items: center;

  img {
    width: 88px;
    height: 88px;
    border-radius: 36px;
    cursor: pointer;
  }

  .icon {
    color: ${props => props.theme.colors.orange};
    cursor: pointer;
    transition: 0.4s;
    width: 25px;
    height: 25px;
    margin: 0 -2rem 0 1rem;

    &:hover {
      opacity: 0.7;
    }
  }
`