import styled from 'styled-components'

export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
`

export const SectionActions = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 32px;
`

export const DiscardButton = styled.button`
  width: 98px;
  height: 41px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: transparent;
  border: none;

  color: #5f5f5f;
  font-size: 14px;
  text-decoration: underline;
`

export const PublishButton = styled.button<{ active?: boolean }>`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? '#71bb00' : '#5f5f5f')};
  border: none;
  color: ${(props) => (props.active ? '#ffffff' : '#313131')};
`
