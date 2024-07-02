import { FiImage, FiTrash } from 'react-icons/fi';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  background: #313131;
  border: 1px solid #494949;
  border-radius: 0.25rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 0.5rem;
`;

export const ImageInput = styled.div`
  border-radius: 3rem;
  width: 7rem;
  height: 7rem;
  border: 1px solid #494949;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: #7a7a7a;
`;

export const ImageIcon = styled(FiImage)``;

export const TrashButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(3rem, -50%);
  cursor: pointer;
  transition: 0.1s;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  font-size: 1.5rem;
  color: #c25425;

  &:hover {
    color: #fff;
  }
`;

export const TrashIcon = styled(FiTrash)``;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  background: #494949;
  color: #fff;
  border: none;
  font-size: 0.875rem;
  border-radius: 0.5rem;
`;

export const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  background: #494949;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  resize: none;
  min-height: 8rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  min-height: 5rem;
`;

export const Buttons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const CancelButton = styled.button`
  padding: 0.75rem 1.25rem;
  color: #7a7a7a;
  background: none;
  border: none;
  text-decoration: underline;
  transition: 0.1s;
  cursor: pointer;

  border-radius: 0.5rem;

  &:hover {
    color: #fff;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1.25rem;
  background: #71bb01;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: #5f9e00;
  }

  &:disabled {
    background: #5f5f5f;
    color: #313131;
    cursor: default;
  }
`;
