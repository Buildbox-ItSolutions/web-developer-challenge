import styled from 'styled-components'

export const CreatePostContainer = styled.div`
  width: 32.25rem;
  height: 22.063rem;
  background-color: ${(props) => props.theme.post};
  border: 1px solid ${(props) => props.theme.border};
  padding: 1.5rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
