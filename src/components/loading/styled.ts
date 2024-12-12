import styled, { keyframes } from 'styled-components'

export const LoadingBox = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpinLoading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const SLoading = styled.div`
  border: 5px solid #473f57;
  border-top: 5px solid #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${SpinLoading} 1s linear infinite;
`
