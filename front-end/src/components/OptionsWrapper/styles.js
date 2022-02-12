import styled from "styled-components";

const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

const DiscardButton = styled.div `
  width: fit-content;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const PublishButton = styled.div `
  width: 98px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #5f5f5f;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  box-sizing: border-box;
  cursor: pointer;
`;

const PublishLabel = styled.span`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #313131;
`

const DiscardLabel = styled.span`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #5f5f5f;
  text-decoration: underline;
`

export {
  Container,
  DiscardButton,
  PublishButton,
  PublishLabel,
  DiscardLabel,
};