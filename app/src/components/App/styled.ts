import styled, { css } from "styled-components";
import { Form as F } from "antd";

export const Box = css`
  background: #313131;
  border: 1px solid #383838;
`

export const Form = styled(F)`
  ${Box}
`

export const Main = styled.div`
  background: #343434;
  overflow: auto;
`

export const Header = styled.div`
  background: #2B2B2B;
`;

export const Title = styled.span`
  color: #71BB00;
  font-weight: bold;
  font-size: 30px;
  line-height: 1;
`;

export const Subtitle = styled.span`
  color: #565656;
  text-transform: uppercase;
`;

export const Body = styled.div`
  max-width: 516px;
`;

const InputCommons = css`
  background: #494949;
  border: none;
  border-radius: 5px;
  padding: 15px;
  color: #FFFFFF;
  outline: none;
  &::placeholder {
    color: #9F9F9F;
  }
`;

export const Input = styled.input`
  ${InputCommons}
`;

export const Textarea = styled.textarea`
  ${InputCommons}
  resize: none;
`;

const BottonCommons = css`
  border: none;
  border-radius: 10px;
`

export const DiscardButton = styled.button`
  ${BottonCommons}
  text-decoration: underline;
  background: transparent;
  color: #595959;
`;

export const PublishButton = styled.button<{
  active: boolean;
}>`
  ${BottonCommons}
  background: ${({ active }) => active ? "#71BB00" : "#5F5F5F"};
  color: ${({ active }) => active ? "#FFFFFF" : "#313131"};
`;

export const FeedTitle = styled.span`
  color: #606060;
`;