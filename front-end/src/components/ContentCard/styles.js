import styled from "styled-components";

const Container = styled.div `
  width: ${props => props.width < 560 ? `${props.width - 40}px` : "38vw"};
  min-width: ${props => props.width < 560 ? "0" : "516px"};
  height: fit-content;
  background-color: #313131;
  padding: 56px 24px 32px 24px;

  display: flex;
  flex-direction: ${props => props.width < 360 ? "column" : "row"};
  justify-content: flex-start;
  align-items: ${props => props.width < 360 ? "center" : "flex-start"};
  margin-bottom: 16px;
  border: 2px solid #3b3b3b;
  border-radius: 3px;
  box-sizing: border-box;
  position: relative;
`;

const DeleteIcon = styled.img `
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

const TextWrapper = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-left: ${props => props.width < 360 ? "0" : "32px"};
`;

const MessageBody = styled.span `
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.25;
  text-align: left;
  color: #9f9f9f;
  margin-top: ${props => props.width < 360 ? "32px" : "0"};
`;

const AuthorFooter = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const SentByLabel = styled.span `
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.29px;
  text-align: left;
  color: #5f5f5f;
`;

const AuthorDisplay = styled.span `
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.29;
  text-align: left;
  color: #7a7a7a;
`;

export {
  Container,
  DeleteIcon,
  TextWrapper,
  MessageBody,
  AuthorFooter,
  SentByLabel,
  AuthorDisplay,
};