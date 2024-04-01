import Icon from "@components/Icon";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  gap: 32px;
  display: flex;
  position: relative;
  border-radius: 3px;
  padding: 56px 24px 32px;

  ${(props) => css`
    border: 1px solid ${props.theme.colors.black};
    background-color: ${props.theme.colors.black_two};
  `}

  &.posting {
    animation: posting 1s forwards;
  }

  &.removing {
    animation: posting 1s reverse forwards;
  }

  @keyframes posting {
    from {
      opacity: 0;
      margin-top: -40%;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

export const Content = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;

  & > :last-child {
    gap: 2px;
    display: flex;
    flex-direction: column;
  }
`;

export const BtnRemove = styled(Icon)`
  top: 12px;
  right: 12px;
  cursor: pointer;
  position: absolute;
`;
