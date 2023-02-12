import styled from 'styled-components';
import { unstyledButton } from '../../../../shared/styles';

export const ListWrapper = styled.div`
  margin: 0 auto;
  max-width: 512px;
  width: 100%;
  font-size: 16px;
`;

export const ListTitle = styled.p`
  margin-bottom: 8px;
  width: 100%;
  color: ${({ theme }) => theme.colors.warmGreyTwo};
  font-size: 17px;
  font-weight: semibold;
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  padding: 56px 24px 32px;
  border: 1px solid ${({ theme }) => theme.colors.greyishBrownTwo};
  background-color: ${({ theme }) => theme.colors.blackTwo};

  :not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const DeleteButton = styled.button`
  ${unstyledButton}
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const CardBody = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.warmGreyThree};
`;

export const CardImage = styled.img`
  margin-right: 32px;
  width: 88px;
  height: 88px;
  border-radius: 36px;
  object-fit: cover;
`;

export const CreatedByTitle = styled.p`
  margin: 24px 0 2px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.brownishGrey};
`;

export const CreatedBy = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.warmGreyTwo};
`;
