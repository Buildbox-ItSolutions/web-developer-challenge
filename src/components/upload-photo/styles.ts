import styled from 'styled-components'

export const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  height: 5.5rem;
  padding: ${(props) => props.theme.spacing[8]};
  object-fit: contain;
  border-radius: ${(props) => props.theme.radius['3xl']};
  border: solid 1px ${(props) => props.theme.colors.gray[300]};
  margin-bottom: ${(props) => props.theme.spacing[4]};
  align-self: center;
  border-style: ${(props) => (props.isActive ? 'dashed' : 'solid')};
  scale: ${(props) => (props.isActive ? '1.1' : '1')};
  transition: all 0.2s ease-in-out;
  position: relative;
`

export const DropZoneThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`

export const DragMessage = styled.span`
  text-align: center;
  font-size: 0.5rem;
  margin-top: ${(props) => props.theme.spacing[1]};
  color: ${(props) => props.theme.colors.gray[500]};
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${(props) => props.theme.radius['3xl']};
  border: solid 1px ${(props) => props.theme.colors.gray[300]};
  position: absolute;
  inset: 0;
`
