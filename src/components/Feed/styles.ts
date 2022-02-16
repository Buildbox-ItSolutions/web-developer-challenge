import { colors } from './../../themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 41px;
`;

export const FeedSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: ${colors.text3};
  margin-bottom: 8px;
`;

export const FeedContainer = styled.div`
  margin-top: 56px;
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
`;
