import styled from "styled-components";

export const PostContainer = styled.article`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.colors.gray.main};
  border: 1px solid ${(props) => props.theme.colors.gray.light};
  padding: 40px 23px 23px 23px;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.gray.lighter};
  }

  & div:last-child {
    padding: 0 0 0 34px;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.gray.lightest};
  }

  & p:first-child {
    margin-bottom: 30px;
  }
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
  font-size: 16px;
  font-weight: 400;
`;
