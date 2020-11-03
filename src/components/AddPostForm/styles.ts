import styled from 'styled-components';

interface PublishButtonProps {
  readonly isActive: boolean;
}

export const Container = styled.form`
  border-radius: 3px;
  margin: auto;
  margin-top: 40px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const NameInput = styled.input`
  box-sizing: border-box;
  margin-left: 24px;
  margin-right: 24px;
  width: calc(100% - 48px);
  height: 40px;
  padding-left: 16px;
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  border-radius: 8px;
  background-color: #494949;

  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;

  ::placeholder {
    color: #9f9f9f;
  }
  &focus {
    border: none;
    outline: none;
    appearance: none;
  }
`;

export const MessageInput = styled.textarea`
  box-sizing: border-box;
  width: calc(100% - 48px);
  margin-left: 24px;
  margin-right: 24px;
  height: 80px;
  padding: 12px 16px;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 8px;
  background-color: #494949;
  resize: none;
  overflow: hidden;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-top: 8px;
  ::placeholder {
    color: #9f9f9f;
  }
  &focus {
    border: none;
    outline: none;
    appearance: none;
  }
`;

export const DiscardButton = styled.button`
  cursor: pointer;

  border: none;
  outline: none;
  appearance: none;
  background: none;
  width: 24px;
  height: 24px;
  margin: 32px;
  text-decoration: underline;
  width: 60px;
  height: 17px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #5f5f5f;
`;

export const PublishButton = styled.button<PublishButtonProps>`
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;

  width: 120px;
  height: 41px;
  object-fit: contain;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? '#71bb00' : '#5f5f5f')};
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#313131')};
`;

export const FooterContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  padding-right: 24px;
  width: 100%;
  justify-content: flex-end;
`;

export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  border: 2px solid #2b2b2b; /* Light grey */
  border-top: 2px solid #ffffff; /* Blue */
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin: auto;
  animation: spin 2s linear infinite;
`;
