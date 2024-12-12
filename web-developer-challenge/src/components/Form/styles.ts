import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputName = styled.input`
  background-color: #494949;
  border-radius: 8px;
  border: none;
  color: white;
  height: 40px;
  margin: 16px 0 8px;
  object-fit: contain;
  padding: 12px 0px 11px 0px;
  text-indent: 20px;
  width: 100%;
`;

export const InputText = styled.textarea`
  background-color: #494949;
  border-radius: 8px;
  border: none;
  color: white;
  height: 120px;
  line-height: 1.5rem;
  padding: 2%;
  margin: 8px 0 32px;
  object-fit: contain;
  overflow: hidden;
  resize: none;
  text-indent: 20px;
  width: 96%;
`;

export const ButtonsContainer = styled.div`
  align-self: end;
  display: flex;
`;

const Button = styled.button`
  border: none;
  font-family: Roboto;
  font-size: 14px;
`;

export const DiscardButton = styled(Button)`
  background-color: transparent;
  color: #5f5f5f;
  cursor: pointer;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  height: 17px;
  letter-spacing: normal;
  line-height: 1.29;
  margin: 12px 24px 12px 0;
  text-align: center;
  text-decoration: underline;
  width: 60px;
`;

export const PublishButton = styled(Button)`
  background-color: ${(props) => (props.disabled ? '#5f5f5f' : '#71bb00')};
  border-radius: 8px;
  color: ${(props) => (props.disabled ? '#313131' : '#fff')};
  cursor: ${(props) => (props.disabled ? 'null' : 'pointer')};
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  height: 41px;
  letter-spacing: normal;
  line-height: 1.29;
  padding: 12px 24px;
  text-align: center;
  width: 98px;
`;
