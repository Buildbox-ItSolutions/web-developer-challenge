import styled from 'styled-components'

export const ImagePreview = styled.div<{ hasImage?: boolean }>`
  display: ${(props) => (props.hasImage ? 'none' : 'flex')};
  height: 6rem;
  width: 6rem;
  cursor: pointer;

  border-radius: 40%;
  border: 1px solid ${(props) => props.theme['gray-200']};

  align-items: center;
  justify-content: center;

  > svg {
    height: 2rem;
    width: 2rem;

    color: ${(props) => props.theme['gray-100']};
  }
`
export const FileInputContainer = styled.label<{ $hasImage: boolean }>`
  position: relative;

  > button {
    display: ${(props) => (props.$hasImage ? 'none' : 'inline')};
    position: absolute;
    top: 2.25rem;
    right: -2.25rem;
    cursor: pointer;

    border: none;
    background: transparent;

    > svg {
      color: ${(props) => props.theme['red-500']};
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  > input {
    display: none;
  }
`
