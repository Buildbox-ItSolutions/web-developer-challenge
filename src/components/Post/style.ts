import styled from "styled-components";


export const ContainerPostS = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 32px;
    padding-top: 46px;
    position: relative;
    

    @media screen and (max-width:300px){
        flex-direction: column;
        align-items: center;
    }
`
export const DeletePostS = styled.img`

    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
`

export const TextS = styled.span`

    
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #9f9f9f;
`

export const SendByS = styled.p`

  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.29px;
  text-align: left;
  color: #5f5f5f;
`

export const OwnerPostS = styled.h4`

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
`

export const TextContainersS = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;

`
