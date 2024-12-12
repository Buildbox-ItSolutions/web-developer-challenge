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
    font-weight: 500;
  }

  & > div {
    width: 100%;
    background-color: #313131;
    border: 1px solid #3b3b3b;
    border-radius: 3px;
    margin: 0.3rem 0 0;
    padding: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: row;

    &:not(.empty-feed) {
      &.active {
        animation: 0.7s SlideIn forwards;
      }
      & {
        animation: 0.5s SlideOut forwards;
      }
    }

    &.empty-feed {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      padding: 1rem;

      > span {
        text-align: center;
        font-size: 14px;
        position: relative;

        > div {
          position: absolute;
          right: -27px;
          top: -2px;
        }
      }
    }

    > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-top: 1.7rem;

      img {
        width: 88px;
        border-radius: 36px;
        transition: all 0.3s;
      }
    }

    > div:nth-child(2) {
      padding: 1.5rem;

      > div:nth-child(1) {
        margin-bottom: 1.5rem;

        p {
          font-size: 16px;
          color: #9f9f9f;
          line-height: 20px;
          word-break: break-all;
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
          word-break: break-all;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
      }
    }

    > img {
      position: absolute;
      right: 0.8rem;
      top: 0.8rem;
      cursor: pointer;
    }

    @keyframes SlideIn {
      from {
        opacity: 0;
        transform: translate(0px, -150px);
      }
      to {
        opacity: 1;
        transform: translate(0px, 0px);
      }
    }

    @keyframes SlideOut {
      from {
        opacity: 1;
        transform: translate(0px, 0px);
      }
      to {
        opacity: 0;
        transform: translate(0px, -150px);
      }
    }
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 425px) {
    width: 95%;
    margin: 5px 30px 10px;

    & > div {
      padding: 0.8rem;

      > div:nth-child(1) {
        margin-top: 1.5rem;

        img {
          width: 60px;
          border-radius: 23px;
          transition: all 0.3s;
        }
      }

      > div:nth-child(2) {
        padding: 0 1.2rem 0 0.8rem;

        div {
          padding: 1.2rem 0 0.3rem 0;
        }
      }

      > img {
        right: 0.5rem;
        top: 0.5rem;
      }
    }
  }
`;

export default Container;
