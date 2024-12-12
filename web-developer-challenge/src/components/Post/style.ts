import styled from "styled-components";

export const StyledPost = styled.div`
  width: 516px;
  height: 185px;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  align-items: stretch;
`;

export const PostPhoto = styled.div`
  width: 88px;
  height: 88px;
  margin: 24px 32px 16px 0;
  object-fit: contain;
  border-radius: 36px;
`;

export const PostText = styled.p`
  width: 348px;
  height: 80px;
  margin: 24px 12px 24px 32px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #9f9f9f;
`;

export const PostTitle = styled.p`
  width: 100%;
  height: 14px;
  margin-left: 32px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.29px;
  text-align: left;
  color: #5f5f5f;
`;

export const PostName = styled.p`
  width: 100%;
  height: 17px;
  margin-left: 32px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
`;