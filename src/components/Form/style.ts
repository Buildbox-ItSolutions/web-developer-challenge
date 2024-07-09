import styled from 'styled-components'
import { ImageOutlined, DeleteOutlined } from '@mui/icons-material'

export const Form = styled.div`
  display: flex;
  position: relative;

  width: 480px;
  padding: 25px;
  border: 1px solid ${({ theme }) => theme.palette.brandGrey.dark};
  border-radius: 6px;
  
  background-color: ${({ theme }) => theme.palette.brandGrey.main};

  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 600px) {
    width: 90%;
    padding: 15px;
  }
`

export const ProfileImage = styled.img`
  width: 85px;
  height: 85px;
  border: 1px solid ${({ theme }) => theme.palette.brandGrey.light};
  border-radius: 36px;
`

export const ImageDelete = styled(DeleteOutlined)`
  position: absolute;
  right: 160px;
  top: 55px;

  font-size: 28px;
  color: ${({ theme }) => theme.palette.brandRed.main};

  @media (max-width: 600px) {
    right: 25%;
    top: 45px;
  }

  @media (max-width: 300px) {
    right: 18%;
    top: 45px;
  }
`

export const ImageContainer = styled.label`
  display: flex;
  
  width: 85px;
  height: 85px;
  border: 1px solid ${({ theme }) => theme.palette.brandGrey.light};
  border-radius: 36px;

  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const ImageInput = styled.input`
  display: none;
`

export const ImageIcon = styled(ImageOutlined)`
  font-size: 28px;
  color: ${({ theme }) => theme.palette.brandGrey.lightest};
`

export const NameInput = styled.input`
  width: 100%;
  margin-top: 15px;
  padding: 12px;
  border: none;
  border-radius: 10px;

  font-size: ${({ theme }) => theme.typography.fontSize.large};
  color: ${({ theme }) => theme.palette.brandWhite.main};

  background-color: ${({ theme }) => theme.palette.brandGrey.light};

  outline: none;
`

export const MessageInput = styled.textarea`
  width: 100%;
  height: 70px;
  margin-top: 10px;
  padding: 12px;
  border: none;
  border-radius: 10px;

  font-size: ${({ theme }) => theme.typography.fontSize.large};
  color: ${({ theme }) => theme.palette.brandWhite.main};

  background-color: ${({ theme }) => theme.palette.brandGrey.light};

  outline: none;
  resize: none;
`

export const ButtonsContainer = styled.div`
  display: flex;

  width: 100%;
  margin-top: 30px;

  justify-content: end;
  align-items: center;
  gap: 25px;

  @media (max-width: 600px) {
    gap: 15px;
  }
`

export const Discard = styled.button`
  border: none;

  color: ${({ theme }) => theme.palette.brandGrey.lighter};
  text-decoration:underline;

  background-color: ${({ theme }) => theme.palette.brandGrey.main};

  cursor: pointer;
`

export const Publish = styled.button`
  padding: 12px 22px;
  border: none;
  border-radius: 8px;

  color: ${({ theme }) => theme.palette.brandWhite.main};

  background-color: ${({ theme }) => theme.palette.brandGreen.main};

  cursor: pointer;

  &:disabled {
    color: ${({ theme }) => theme.palette.brandGrey.main};

    background-color: ${({ theme }) => theme.palette.brandGrey.lighter};

    cursor: auto;
  }

  @media (max-width: 600px) {
    padding: 8px 16px;
  }
`
