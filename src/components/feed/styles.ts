import styled from "styled-components";

export const FeedContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing[14]};

  width: 100%;

  padding-bottom: ${({ theme }) => theme.spacing[10]};

  & h2 {
    text-align: start;
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }
`;

export const PostsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const PostContainer = styled.li`
  position: relative;

  border: 1px solid ${({ theme }) => theme.colors.gray[550]};

  padding-top: ${({ theme }) => theme.spacing[14]};
  padding-bottom: ${({ theme }) => theme.spacing[8]};
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};

  background-color: ${({ theme }) => theme.colors.gray[550]};

  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  border-radius: 3px;

  .avatar-img {
    width: 88px;
    height: 88px;
    object-fit: cover;
    border-radius: 36px;
  }

  .delete-btn {
    position: absolute;
    top: ${({ theme }) => theme.spacing[3]};
    right: ${({ theme }) => theme.spacing[3]};
    background: none;
    border: none;
    cursor: pointer;
  }

  .delete-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .texts-container {
    & p {
      color: ${({ theme }) => theme.colors.gray[200]};
    }

    span {
      margin-top: ${({ theme }) => theme.spacing[6]};

      font-size: 0.875rem;
      display: block;
      color: ${({ theme }) => theme.colors.gray[400]};
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 0.125rem;
    }

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.gray[300]};
      font-size: 0.875rem;
    }
  }
`;

export const EmptyFeed = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: ${({ theme }) => theme.spacing[14]};
`;