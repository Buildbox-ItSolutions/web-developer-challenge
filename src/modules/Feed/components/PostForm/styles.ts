import styled from "styled-components";

export const FormGroup = styled.div`
  background-color: #313131;
  width: 37vw;
  height: 50vh;
  max-width: 570px;
  max-height: 380px;
  min-width: 400px;
  min-height: 380px;
  gap: 12px;
  margin: 40px 0;
  padding: 24px 45px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90vw;
    height: 50vh;
    padding: 12px;
  }
`;

export const Header = styled.div`
  display: flex;
`;

export const Actions = styled.div`
  max-width: 100%;
  margin-top: 5%;
  display: flex;
  align-self: end;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
`;

export const Errors = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  color: #e17978;
`;
