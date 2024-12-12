import { styled } from '@mui/material'

const TextInput = styled('input')(({theme}) => ({
  width: 'calc(100% - 24px)',
  backgroundColor: '#494949',
  outline: 'none',
  border: 'none',
  borderRadius: '8px',
  padding: '16.5px 14px',
  color: 'white',
  "::placeholder": {
    color: '9f9f9f'
  },
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '1.29',
  fontFamily: 'Roboto'
}))

export default TextInput;
