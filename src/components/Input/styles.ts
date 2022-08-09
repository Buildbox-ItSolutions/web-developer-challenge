import styled from 'styled-components'
export const InputField = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1rem'
}))`
  font-family: Roboto;
  font-size: 14px;

  background-color: #494949;
  color: #fff;
  border: 1px solid #343434;
  line-height: ${(props) => props.size};
  margin: 16px;
  padding: 8px;

  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 10px;
    border: 1px solid black;
  }
`
