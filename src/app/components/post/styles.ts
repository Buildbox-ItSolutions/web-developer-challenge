import { FiMinusCircle, FiXCircle } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';
import { $ImageProps } from './types';

export const Container = styled.section`
  gap: 0.5rem;
  padding: 0.75rem;
  background: #313131;
  border: 1px solid #494949;
  border-radius: 0.25rem;
  gap: 1.5rem;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content max-content max-content;
  grid-template-areas:
    'close close'
    'image content';
  transition: 0.2s;
`;

export const CloseButton = styled(FiXCircle)`
  grid-area: close;
  justify-self: end;
  color: #c25425;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.1s;

  &:hover {
    color: #fff;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;

export const LoadingCloseButton = styled(FiMinusCircle)`
  color: #686868;
  font-size: 1.5rem;
  grid-area: close;
  justify-self: end;
  animation: ${rotate} 1s linear infinite;
`;

export const Image = styled.div<$ImageProps>`
  border-radius: 2.5rem;
  width: 6rem;
  height: 6rem;
  margin: 0 1rem;
  border: 1px solid #494949;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  padding-right: 1rem;
  font-size: 1.125rem;
  color: #878787;
  flex: 1;
`;

export const AuthorLabel = styled.label`
  margin-top: 2rem;
  font-size: 0.75rem;
  color: #5a5a5a;
`;

export const Author = styled.span`
  color: #686868;
`;
