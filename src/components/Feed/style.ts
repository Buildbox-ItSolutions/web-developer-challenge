import styled from "styled-components";

export const StyledFeed = styled.section`
  width: 90%;
  max-width: 516px;
  & figure {
    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: 1px solid var(--gray-100);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .imgProfile {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
  & .imgDefault {
    width: 24px;
    height: 24px;
  }
  & h3 {
    margin-bottom: 8px;
    font-weight: 500;
  }
  & section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
export const StyledContent = styled.div`
  background-color: var(--gray-300);
  padding: 32px 24px;
  display: flex;
  gap: 24px;
  border: solid 1px var(--gray-100);
  border-radius: 8px;
  position: relative;
  align-items: flex-start;
  & button {
    position: absolute;
    background-color: transparent;
    top: 12px;
    right: 12px;
    padding: 0;
    width: 20px;
    height: 20px;
  }
  & .content-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    & div h4 {
      color: var(--gray-text);
    }
  }
`;
