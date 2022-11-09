import styled from 'styled-components'

import { COLORS } from '../../../../core/constants'

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
  background-color: transparent;
  border: none;
  border-radius: 8px;
  color: ${COLORS.mediumDarkShadeOfGray};
  font-size: 14px;
  height: 41px;
  padding: 12px 24px;
  text-decoration: underline;
  width: 98px;
`

export const PublishButton = styled.button<{ active?: boolean }>`
  background-color: ${(props) =>
    props.active ? COLORS.green : COLORS.mediumDarkShadeOfGray};
  border: none;
  border-radius: 8px;
  color: ${(props) => (props.active ? COLORS.white : COLORS.darkShadeOfGrey)};
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  width: 98px;
`
