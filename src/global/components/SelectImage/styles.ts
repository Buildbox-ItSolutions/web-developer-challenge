import styled from 'styled-components';
import { CgTrashEmpty } from 'react-icons/cg';
import { RiGalleryFill } from 'react-icons/ri';
import { TThumbnailSource } from './types';

export const SelectImage = styled.label`
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 40%;
  border: 1px solid ${({ theme }) => theme.colors.gray['500']};
  cursor: pointer;

  input[type='file'] {
    display: none;
  }
`;

export const Input = styled.input``;

export const ButtonIcon = styled.button`
  background: transparent;
  border: none;
`;

export const Icon = styled(RiGalleryFill)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.gray['200']};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1.6rem;
`;

export const IconTrash = styled(CgTrashEmpty)`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 2.4rem;
  cursor: pointer;
`;

export const Thumbnail = styled.div<TThumbnailSource>`
  background: ${({ thumbnailSource }) => `url('${thumbnailSource}')`};
  height: 88px;
  width: 88px;
  background-size: cover;
  border-radius: 50%;
  background-position: center;
`;
