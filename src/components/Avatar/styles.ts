import styled from 'styled-components'

export const AvatarImage = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 36px;
  object-fit: cover;
`

export const AvatarEmptyImage = styled.div`
  width: 5.5rem;
  height: 5.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: none;

  border-radius: 36px;
  border: 1px solid ${(props) => props.theme['gray-450']};

  
  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: relative;
    z-index: 1;
    
    cursor: pointer;
  }

  svg {
    position: relative;
    top: -50%;
    transform: translate(0, 50%);
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0;
`

export const RemoveAvatarImage = styled.button`
  display: flex;
  align-self: flex-end;

  background: none;

  border-radius: 50%;
  border: none;

  position: absolute;
  margin-top: 2rem;
  margin-right: -2.5rem;
`