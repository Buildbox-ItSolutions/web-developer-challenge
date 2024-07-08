import { transparentize } from "polished";
import styled from "styled-components";

// ----------------------------------------
// # Input component
// ----------------------------------------

export const Input = styled.input`
  height: 2.5rem;
  padding: 0 1rem;

  color: ${(props) => props.theme.color.common.white};
  background-color: ${(props) => props.theme.color.neutral[300]};
  border-radius: ${(props) => props.theme.radius.sm};

  border: none;

  &::placeholder {
    color: ${(props) => props.theme.color.neutral[200]};
  }
`;

// ----------------------------------------
// # Textarea component
// ----------------------------------------

export const Textarea = styled.textarea`
  resize: none;

  min-height: 6rem;
  padding: 0.5rem 1rem;

  color: ${(props) => props.theme.color.common.white};
  background-color: ${(props) => props.theme.color.neutral[300]};
  border-radius: ${(props) => props.theme.radius.sm};

  border: none;

  &::placeholder {
    color: ${(props) => props.theme.color.neutral[200]};
  }
`;

// ----------------------------------------
// # Button component
// ----------------------------------------

export const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? props.theme.color.primary["400"] : "transparent")};
  color: ${(props) => (props.$primary ? "white" : props.theme.color.neutral[200])};

  font-size: 1em;
  padding: 0.75em 1em;
  border: none;
  border-radius: 0.5em;

  text-decoration: ${(props) => (props.$primary ? "none" : "underline")};
  transition: all;

  cursor: pointer;

  &:hover {
    color: ${(props) => (props.$primary ? "white" : props.theme.color.neutral[100])};
    background: ${(props) => (props.$primary ? props.theme.color.primary["300"] : "transparent")};
  }

  &:disabled {
    color: ${(props) => (props.$primary ? props.theme.color.neutral[800] : props.theme.color.neutral[400])};
    background: ${(props) => (props.$primary ? props.theme.color.neutral["300"] : "transparent")};

    cursor: not-allowed;
  }
`;

// ----------------------------------------
// # Root
// ----------------------------------------

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  li {
    list-style: none;
  }
`;

// ----------------------------------------
// # Header section
// ----------------------------------------

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  width: 100%;
  padding: 1.5rem 0;

  background-color: ${(props) => props.theme.color.neutral[800]};

  h1 {
    font-size: 1.5em;
    font-weight: 800;
    text-align: center;
    color: ${(props) => props.theme.color.primary["400"]};
  }

  p {
    color: ${(props) => props.theme.color.neutral["200"]};
    font-size: 0.875rem;
  }

  /* Remove this when css reset is added */
  & * {
    margin: 0;
    padding: 0;
  }
`;

export const HeaderSubtitle = styled.div``;

// ----------------------------------------
// # Content section
// ----------------------------------------

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  width: 100%;
  max-width: 520px;
  padding: 0 0.5rem;
`;

// ----------------------------------------
// # Draft section
// ----------------------------------------

export const Draft = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 520px;

  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme.color.neutral[700]};
  border: 1px solid ${(props) => props.theme.color.neutral[500]};
`;

export const TitleDraft = styled.h1`
  /* Screen readers only */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const ImageSectionDraft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const LabelImageSectionDraft = styled.div`
  position: relative;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  img {
    width: 6rem;
    aspect-ratio: 1/1;

    border-radius: ${(props) => props.theme.radius.xl};

    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);

    cursor: pointer;
  }

  /* Makes the ImageFileInput focus when the input is targeted */
  &:has(#image:focus) label > * {
    outline: 1px solid ${(props) => props.theme.color.primary[400]};
    box-shadow: 0 0 0 0.25rem ${(props) => transparentize(0.8, props.theme.color.primary[300])};
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  transform: translateX(100%) translateY(-50%);
  right: -1rem;
  top: 50%;

  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.color.danger[400]};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.danger[300]};
  }
`;

export const ImageFileInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6rem;
  aspect-ratio: 1/1;

  border-radius: ${(props) => props.theme.radius.xl};

  border: 1px solid ${(props) => props.theme.color.neutral[300]};
  color: ${(props) => props.theme.color.neutral[200]};

  cursor: pointer;

  transition: all;

  &:hover {
    background-color: ${(props) => props.theme.color.neutral[500]};
  }
`;

export const FieldsSectionDraft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

export const ButtonSectionDraft = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
`;

export const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.danger[300]};
`;

// ----------------------------------------
// # Feed section
// ----------------------------------------

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

export const TitleFeed = styled.h1`
  font-size: 0.875rem;

  color: ${(props) => props.theme.color.neutral[200]};
`;

export const ListFeed = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

  width: 100%;
`;
