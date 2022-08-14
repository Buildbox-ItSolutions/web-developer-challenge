import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  height: 353px;

  margin-top: 40px;
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.primary.gray350};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray300};

  display: flex;
  align-items: center;
  flex-direction: column;

  > input {
    margin-top: 16px;
  }

  > textarea {
    margin-top: 8px;
  }
`
export const Buttons = styled.div`
  margin-top: 20px;
  align-self: flex-end;
  @media (max-width: 305px) {
    display: flex;
    align-self: center;

    flex-direction: column-reverse;
  }
`
