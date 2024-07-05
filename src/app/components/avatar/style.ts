import styled from "styled-components";
import Image from "next/image";

export const AvatarImage = styled(Image)`
  border-radius: 36px;
  object-fit: cover;
`;

export const CustomNoImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border-radius: 36px;
  background: none;
  border: 1px solid ${(props) => props.theme.colors.gray.lighter};

  & svg {
    color: ${(props) => props.theme.colors.gray.lighter};
    font-size: 24px;
  }
`;
