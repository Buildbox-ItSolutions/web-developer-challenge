import styled from "styled-components";

export const StyledModal = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  & .modal {
    border-radius: 8px;
    background-color: var(--gray-300);
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    & div {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
  & .confirmBtn {
    background-color: var(--primary-color);
  }
`;
