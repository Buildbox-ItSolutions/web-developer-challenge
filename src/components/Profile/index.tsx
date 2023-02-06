import styled from "styled-components";

export interface ProfileProps {
  picture: string;
};

export const Profile = styled.div<ProfileProps>`
  position: relative;
  width: 88px;
  height: 88px;
  margin-bottom: 16px;
  border-radius: 36px;
  background-image: url(${({ picture }) => picture });
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
`;
