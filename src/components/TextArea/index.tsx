import { styled } from "@mui/material";

const TextArea = styled('textarea', {})(({ theme }) => ({
  width: 'calc(100% - 24px)',
  height: '80px',
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
  fontFamily: 'Roboto',
  resize: 'none',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    margin: '4px 0px'
  },
  '&::-webkit-scrollbar-thumb': {
    marginLeft: '10px', 
    borderRadius: '30px',
    backgroundColor: '#2b2b2b',
  }
}))


export default TextArea