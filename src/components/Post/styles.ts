import styled from "styled-components";

export const Container = styled.div`
  background-color: #313131;
  border: 1px solid #3b3b3b;
  width: 516px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px 12px 32px 24px;
  padding-right: 28px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DeleteIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`

export const ButtonIcon = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  height: 0;
  width: 0;

  &:hover {
    opacity: 0.7;
    transition: 0.2s;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const PostImage = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 36px;
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 500px) {
    gap: 16px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
  padding-right: 24px;


  @media (max-width: 500px) {
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`

export const Content = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #9f9f9f;
  font-family: "Roboto", sans-serif;
  max-width: 348px;
  word-break: break-all;
`;

export const CreditsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const CreatedBy = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.29px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #5f5f5f;
`;

export const AuthorName = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-family: "Roboto", sans-serif;
  color: #7a7a7a;
  max-width: 348px;
  word-break: break-all;
`

export const PlaceholderImageContainer = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4b4b4b;
`;
