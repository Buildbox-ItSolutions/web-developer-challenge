import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5.813rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.header};
  border-bottom: 1px solid ${(props) => props.theme.headerBorder};
  margin-bottom: 2.563rem;

  > img {
    width: 103px;
    height: 45px;
    object-fit: contain;
  }
`
