import styled from 'styled-components'

export const CardContainer = styled.li`
  border: solid 1px #3b3b3b;
  border-radius: 3px;
  max-width: 100%;
  list-style: none;
  background: #313131;
  padding: 12px 12px 32px 24px;

  > div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 24px;

    button {
      background: none;
      padding: 0;
      cursor: pointer;
      border: none;
    }
  }

  section {
    max-width: 100%;
    display: flex;
    gap: 32px;

    img {
      width: 88px;
      height: 88px;
      border-radius: 36px;
      object-fit: cover;

      @media (max-width: 414px) {
        width: 60px;
        height: 60px;
      }
    }
  }
`
export const CardContent = styled.div`
  p {
    margin: 0;
    margin-right: none;

    font-size: 16px;
    color: #9f9f9f;
    text-align: left;
    margin-bottom: 24px;



    width: 348px;
    display: inline-block;
    overflow: hidden;
    text-overflow: unset;
    direction: initial;

    @media (max-width: 542px) {
      width: 100%;
    }
  }

  small {
    color: #5f5f5f;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.29px;
    display: block;
    width: 100px;
  }

  span {
    color: #7a7a7a;
    font-size: 14px;
    line-height: 1.29;
    text-align: left;

    width: 348px;
    display: inline-block;
    overflow: hidden;
    text-overflow: unset;
    direction: initial;
  }
`
