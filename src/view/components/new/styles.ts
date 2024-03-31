import styled from "styled-components";

export const Container = styled.div`
  width: clamp(300px, 100%, 32.25rem);
  height: 22.063rem;
  padding: 1.5rem;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: var(--black-two);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .uploader {
    margin-inline: auto;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .btn-group {
    align-self: flex-end;

    .discard {
      font-size: 0.875rem;
      line-height: 1.29;
      text-align: center;
      color: #5f5f5f;
      border-bottom: 1px solid #5f5f5f;
    }
  }
`;

export const Uploader = styled.input.attrs({
  type: "file",
  accept: "image/*",
  placeholder: "aaaaa",
})``;

interface ImageInputContainerProps {
  $url: string;
}

export const ImageInputContainer = styled.label<ImageInputContainerProps>`
  width: 5.5rem;
  height: 5.5rem;
  display: inline-block;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: ${(props) =>
    props.$url ? `url(${props.$url})` : `url(/image.png)`};
  background-size: ${(props) => (props.$url ? "cover" : "auto")};
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 36px;

  &:after {
    content: "${(props) => (props.$url ? "" : "")}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => (props.$url ? "transparent" : "#888")};
  }
  cursor: pointer;
`;

export const Input = styled.input`
  width: clamp(250px, 100%, 29.25rem);
  font-family: inherit;
  height: 2.5rem;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: var(--greyish-brown);
  font-size: 0.875rem;
  line-height: 1.29;
  color: #fff;
  padding-inline: 1rem;
`;

export const Textarea = styled.textarea`
  width: clamp(250px, 100%, 29.25rem);
  font-family: inherit;
  min-height: 5rem;
  border-radius: 8px;
  background-color: var(--greyish-brown);
  resize: none;
  border: none;
  outline: none;
  font-size: 0.875rem;
  line-height: 1.29;
  color: #fff;
  padding: 1rem;
`;

export const Button = styled.button`
  font-family: inherit;
  width: 6.125rem;
  height: 2.563rem;
  border-radius: 8px;
  background-color: var(--dark-lime-green);
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  color: #fff;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #5f5f5f;
  }
`;
