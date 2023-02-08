import { styled } from "@mui/material";


const Link = styled('a')(({theme}) => ({
  textDecoration: 'underline',
  cursor: 'pointer',
  // width: '60px',
  height: '17px',
  // margin: '12px 24px 12px 0',
  fontFamily: 'Roboto',
  fontSize: '14px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.29,
  letterSpacing: 'normal',
  textAlign: 'center',
  color: '#5f5f5f',
  transition: '200ms',
  '&:hover': {
    transform: 'scale(1.16)',
    color: 'red'
    
  }
}))

export default Link