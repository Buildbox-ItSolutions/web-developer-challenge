import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 516px;
  height: fit-content;

  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;

  background-color: var(--black-two);

  font-size: 14px;
  line-height: 18px;

  &:valid {
    [data-submit] {
      cursor: pointer;
      background-color: var(--dark-lime-green);
      color: white;
    }
  }

  div {
    display: flex;
    justify-content: end;
    gap: 24px;
    text-align: center;
    margin-top: 32px;
  }
`;

const InputStyled = styled.input`
  padding: 12px 16px;
  border-radius: 8px;

  color: white;
  background-color: var(--bg-input);

  &::placeholder {
    color: #9f9f9f;
  }
`;

const TextareaStyled = styled.textarea`
  padding: 12px 16px;
  border-radius: 8px;
  height: 56px;

  font-size: 14px;
  line-height: 18px;
  font-family: inherit;
  color: white;

  background-color: var(--bg-input);

  &::placeholder {
    color: #9f9f9f;
  }
`;

const ClearBtn = styled.button`
  cursor: pointer;
  text-decoration: underline;
  color: var(--brownish-grey);
`;

const PublishBtn = styled.button`
  padding: 12px 24px;
  border-radius: 8px;

  transition: 0.5s ease;

  cursor: not-allowed;
  color: var(--bg-btn-disable);
  background-color: var(--brownish-grey);

  @media (max-width: 425px) {
    padding: 6px 12px;
  }
`;

export { FormStyled, PublishBtn, ClearBtn, TextareaStyled, InputStyled };
