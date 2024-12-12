import styled from 'styled-components';

export const Submit = styled.button<{ disabled: boolean }>`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  object-fit: contain;
  border: none;
  border-radius: 8px;
  background-color: #5f5f5f;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: ${({ disabled }) => (disabled ? '#313131' : '#ffffff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
