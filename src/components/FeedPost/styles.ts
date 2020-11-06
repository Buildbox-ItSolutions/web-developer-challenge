import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 516px;
  transition: all 0.3s;
  margin: 0px 30px 20px;

  > p {
    width: 100%;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
  }

  > div {
    width: 100%;
    background-color: #313131;
    border: 1px solid #3b3b3b;
    border-radius: 3px;
    margin: 0.3rem 0 1rem;
    padding: 1.5rem;
    position: relative;

    display: flex;
    flex-direction: row;

    > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 88px;
        border-radius: 36px;
      }
    }

    > div:nth-child(2) {
      padding: 1.5rem;

      > div:nth-child(1) {
        height: 80px;
        margin-bottom: 0.8rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;

        p {
          font-size: 16px;
          color: #9f9f9f;
          line-height: 20px;
        }
      }

      >div: nth-child(2) {
        p:nth-child(1) {
          font-size: 12px;
          color: #5f5f5f;
          line-height: 16px;
          letter-spacing: 0.29px;
        }
        p:nth-child(2) {
          font-size: 14px;
          color: #7a7a7a;
          line-height: 18px;
        }
      }
    }

    > img {
      position: absolute;
      right: 0.8rem;
      top: 0.8rem;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 425px) {
    width: 95%;
    margin: 5px 30px 10px;
  }
`;

export default Container;
