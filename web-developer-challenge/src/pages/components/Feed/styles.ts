import styled from "styled-components";
import { Col, Typography, Card, Image } from "antd";

import { AiOutlineCloseCircle } from "react-icons/ai";

const { Title, Paragraph, Text } = Typography;

export const Column = styled(Col)`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const CardContainer = styled(Card)`
  background-color: var(--background--400) !important;
  width: 32rem;
  border: solid 1px #3b3b3b;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageContainer = styled(Col)``;

export const ImageStyle = styled(Image)`
  border-radius: 36px;
  object-fit: contain;
`;

export const TitleContainer = styled(Col)`
  max-width: 1120px;
  margin: 3.5rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FeedTitle = styled(Title)`
  font-size: 0.875rem !important;
  color: #7a7a7a !important;
  width: 32rem;
`;

export const ParagraphContainer = styled(Col)`
  margin-left: 2rem;
`;
export const ParagraphData = styled(Paragraph)`
  font-size: 1rem;
  color: var(--lightgrey);
`;

export const Sendby = styled(Paragraph)`
  font-size: 0.75rem;
  color: #5f5f5f;
`;
export const TextContainer = styled(Text)`
  font-size: 0.875rem;
  color: #7a7a7a;
`;

export const CloseIconContainer = styled(Col)`
  display: flex;
  align-items: right;
  justify-content: right;
  margin-bottom: 1.5rem;
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  color: red;
  filter: brightness(0.5);
  cursor: pointer;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.7);
  }
`;
