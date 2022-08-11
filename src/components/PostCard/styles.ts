import styled from "styled-components";

import { AiOutlineCloseCircle } from "react-icons/ai";

export const Container = styled.div`
  height: 225px;
  width: 100%;
`;

export const ContainerWrapper = styled.div`
  padding: 24px;

  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  gap: 32px;

  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 36px;
`;

export const Content = styled.div``;

export const Message = styled.div`
  height: 80px;
  font-size: 16px;
  color: #9f9f9f;
  overflow-wrap: anywhere;
  overflow-y: auto;
`;

export const SendBy = styled.div`
  margin-top: 24px;

  font-size: 12px;
  font-weight: 500;
  color: #5f5f5f;
`;

export const Name = styled.div`
  font-size: 14px;
  color: #7a7a7a;
`;

export const RemoveIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  right: calc(0% + 12px);
  top: calc(0% + 12px);
  color: #d65923;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
