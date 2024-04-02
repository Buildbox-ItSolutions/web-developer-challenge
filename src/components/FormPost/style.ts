import styled from "styled-components";

export const StyledFormPost = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-300);
  padding: 24px 16px;
  gap: 16px;
  width: 90%;
  max-width: 516px;
  border-radius: 8px;
  border: solid 1px var(--gray-100);
  align-items: center;
  & .error-msg {
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--error);
  }
  & figure {
    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: 1px solid var(--gray-100);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  & img {
    width: 24px;
    height: 24px;
    max-width: 100%;
    max-height: 100%;
  }
  & div {
    display: flex;
    justify-content: flex-end;
    padding: 12px 0 8px 0;
    width: 100%;
    gap: 8px;
    & .discardBtn {
      background-color: transparent;
      text-decoration: underline;
    }
    & .discardBtn:disabled {
      color: var(--gray-100);
    }
    & .confirmBtn {
      background-color: var(--primary-color);
    }
    & .confirmBtn:disabled {
      background-color: var(--gray-100);
    }
  }
`;
