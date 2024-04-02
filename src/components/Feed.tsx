import React from "react";
import styled from "styled-components";

const FeedContainer = styled.div`
  width: 30px;
  height: 17px;
  margin: 30px 35.6% 2px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 50px 0 0 25px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 70%;
    margin: 50px 0 0 22%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    width: 50%;
    margin: 50px 0 0 29.7%;
  }

  @media screen and (min-width: 1441px) and (max-width: 1680px) {
    width: 40%;
    margin: 50px 0 0 32.5%;
  }

  @media screen and (min-width: 1681px) and (max-width: 1920px) {
    width: 30%;
    margin: 50px 0 0 35.1%;
  }

  @media screen and (min-width: 1921px) {
    width: 30%;
    margin: 50px 0 0 35.3%;
  }
`;

const Feed: React.FC = () => {
  return <FeedContainer>Feed</FeedContainer>;
};

export default Feed;
