import styled from "styled-components";
import ImageUploading from "react-images-uploading";

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5.5rem;
  width: 5.5rem;

  border-radius: 2.25rem;
  border: 1px solid var(--color-gray-150);

  > button {
    height: 100%;
    width: 100%;

    background: transparent;
    border: none;

    > svg {
      height: 24px;
      width: 24px;

      color: var(--color-gray-25);
    }
  }
`;
