import styled from "styled-components";

export const PostContainer = styled.article<{ isPending: boolean }>`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.colors.gray.main};
  border: 1px solid ${(props) => props.theme.colors.gray.light};
  border-radius: 4px;
  padding: 40px 23px 23px 23px;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.gray.lighter};
  }

  & div:nth-child(2) {
    padding: 0 0 0 34px;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.gray.lightest};

    @media (max-width: 550px) {
      padding: 0 0 0 12px;
    }
  }

  & p:nth-child(1) {
    margin-bottom: 30px;
  }

  ${(props) =>
    props.isPending &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

export const Message = styled.p`
  color: ${(props) => props.theme.colors.gray.lightest};
`;

export const SendBy = styled.span`
  color: ${(props) => props.theme.colors.gray.lightest};
  opacity: 0.6;
  font-size: 12px;
`;

export const Name = styled.h3`
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
`;

export const AvatarContainer = styled.div``;

export const MessageContainer = styled.div``;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
