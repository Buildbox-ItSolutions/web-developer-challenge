import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const InputName = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  padding: 1.2rem 3.49rem 1.1rem 1.6rem;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.input_bg};
  margin-bottom: 0.8rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 48em) {
    font-size: 2rem;
    padding: 1.4rem 4.49rem 1.4rem 1.8rem;
  }
`;

export const InputMessage = styled.textarea`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  padding: 1.2rem 3.82rem 4.1rem 1.6rem;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.input_bg};
  margin-bottom: 0.8rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 48em) {
    font-size: 2rem;
    padding: 1.4rem 5.82rem 5.1rem 1.8rem;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.2rem;
  align-items: center;

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.btn};
    text-decoration: underline;
    padding: 1.2rem 2.4rem;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  @media (max-width: 48em) {
    span {
      font-size: 2rem;
    }
  }
`;

export const Erro = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.error};

  @media (max-width: 48em) {
    font-size: 1.5rem;
  }
`;
