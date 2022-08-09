import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 516px;
  height: 225px;
  margin: 8px 425px 16px;
  padding: 12px 12px 32px 24px;
  border-radius: 3px;
  color:#FFF
  border: solid 1px #3b3b3b;
  background-color: #313131;

  display: grid;
	grid-template-columns: 0.5fr 1fr 0.2fr;
`
export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`
export const Text = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #9f9f9f;
`
export const Image = styled.img`
  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 50%;
`

export const EniadoPor = styled.div`
  margin-top: 24px;
  p {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: #5f5f5f;
  }
  h2 {
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
  }
`
