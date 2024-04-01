import styled from "styled-components";
import { Button } from "..";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  padding: 48px 24px 36px 24px;
  background-color: #313131;
  border: 1px solid #3b3b3b;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const RemoveButton = styled(Button)`
  align-self: flex-end;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const Image = styled.img`
  height: 88px;
  width: 88px;
  min-width: 88px;
  min-height: 88px;
  border-radius: 36px;
`;

export const SubContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Message = styled.span`
  color: #9f9f9f;
  line-height: 20px;
  font-size: 16px;
  word-break: break-word;
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: #5f5f5f;
  line-height: 16px;
  font-size: 12px;
`;

export const Name = styled.span`
  color: #7a7a7a;
  line-height: 18px;
  font-size: 14px;
`;
