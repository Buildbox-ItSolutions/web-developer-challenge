import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  object-fit: contain;
`;

export const InputLabel = styled.label`
  cursor: pointer;
`;

export const AvatarContainer = styled.div`
  width: 88px;
  height: 88px;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  display: flex;
  align-items: center;
  margin: 0px 0 0 40px;
`;

export const Avatar = styled.img`
  width: 90px;
  border-radius: 36px;
  height: 90px;
  margin: 0;
  object-fit: contain;
`;

export const Trash = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 16px;
  object-fit: contain;
  cursor: pointer;
`;

export const Input = styled.input`
  cursor: pointer;
  color: transparent;
  opacity: 0;
  width: 0;
  height: 0;
`;
