import { FiXCircle } from 'react-icons/fi';
import styled from 'styled-components';

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

export const Image = styled.div`
  border-radius: 2.5rem;
  width: 6rem;
  height: 6rem;
  margin: 0 1rem;
  border: 1px solid #494949;
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
`;

export const AuthorLabel = styled.label`
  margin-top: 2rem;
  font-size: 0.75rem;
  color: #5a5a5a;
`;

export const Author = styled.span`
  color: #686868;
`;
