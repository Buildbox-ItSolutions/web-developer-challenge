import styled from 'styled-components';

export const UploaderContainer = styled.div`
  width: fit-content;
`;

export const UploaderPlaceholder = styled.div`
  position: relative;
  background: whitesmoke;
  overflow: visible !important;
  min-height: 100px;
  min-width: 100px;
`;

export const UploaderBtnWrapper = styled.div`
  top: 4px;
  right: -40px !important;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 1;
  height: 100% !important;
`;

export const UploaderBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const UploaderFileInputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);

  &:hover {
    cursor: pointer;
  }
`;

export const UploaderFileInput = styled.input`
  position: absolute;
  height: 0.1px;
  width: 0.1px;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const UploaderFile = styled.img`
  display: block;
  object-fit: cover;
  position: absolute;
  min-width: 88px !important;
  min-height: 88px !important;
  max-width: 88px !important;
  max-height: 88px !important;
  border-radius: 36px !important;
  overflow: hidden !important;
`;
