import React from "react";
import styled from "styled-components";

const FeedContainer = styled.div`
  width: 30px;
  height: 17px;
  margin: 30px 35.4% 2px;
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
`;

const Feed: React.FC = () => {
  return <FeedContainer>Feed</FeedContainer>;
};

export default Feed;
