import styled from 'styled-components';

export const FeedContainer = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
  margin-top: 40px;
  margin-bottom: 170px;
`;
export const EmptyFeedMessage = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #7a7a7a;
  margin-top: 40px;
  margin-bottom: 170px;
`;

export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  border: 2px solid #ffffff; /* Light grey */
  border-top: 2px solid #71bb00; /* Blue */
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: auto;
  margin-top: 16px;
  animation: spin 2s linear infinite;
`;
