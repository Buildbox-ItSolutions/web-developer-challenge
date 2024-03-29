import styled from "styled-components";

export const PostFormContainer = styled.form`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray[600]};

  border: solid 1px ${({ theme }) => theme.colors.gray[550]};
  width: 100%;
  padding: 1.5rem;
`;
