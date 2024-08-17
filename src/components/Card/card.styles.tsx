import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex: 0 0 100%;
  position: sticky;
  gap: ${(props) => props.theme.card.gap};
  background-color: ${(props) => props.theme.color.bgCards};
  border: ${(props) => props.theme.card.border};
  border-radius: ${(props) => props.theme.card.borderRadius};
  padding: ${(props) => props.theme.card.padding};
`;

export const Delete = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Message = styled.span`
  text-align: left;
  font-stretch: normal;
  font-weight: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin-bottom: 24px;
`;

export const CreatedBy = styled.section`
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme.color.labelColor};
    font-size: 12px;
    font-weight: 500;
  }
`;

export const Author = styled.span`
  font-weight: normal;
  color: ${(props) => props.theme.color.titleColor};
`;

export const AvatarWrapper = styled.img<{ $hasImage: boolean }>`
  border: ${({ theme, $hasImage }) => ($hasImage ? "none" : theme.card.border)};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.avatar.borderRadius};

  width: ${({ theme }) => theme.avatar.size};
  height: ${({ theme }) => theme.avatar.size};
  padding: ${({ $hasImage }) => ($hasImage ? "0" : "24px")};
`;
