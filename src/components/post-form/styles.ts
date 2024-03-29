import styled from "styled-components";

export const PostFormContainer = styled.form`
  margin-top: ${({ theme }) => theme.spacing[10]};

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray[600]};

  border: solid 1px ${({ theme }) => theme.colors.gray[550]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[8]};
`;
