import styled from 'styled-components'
import { CardContainer } from '../../../components/Card/styles'

export const PostCard = styled(CardContainer)`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 2.25rem;

  padding-top: 3rem;
  padding-right: 3.5rem;

  > button {
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    width: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${(props) => props.theme['red-500']};
    background: transparent;

    padding: 2px;

    > svg {
      color: ${(props) => props.theme['red-500']};
    }

    &:focus {
      box-shadow: none;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    > p {
      font-weight: 400;
      color: ${(props) => props.theme['gray-100']};
    }
  }
`

export const PersonName = styled.div`
  > span {
    display: block;
    font-size: 0.85rem;
    line-height: 1.8;
    font-weight: bold;
  }

  > strong {
    color: ${(props) => props.theme['gray-100']};
    font-weight: 400;
  }
`
