import React, { TextareaHTMLAttributes } from "react";

import { ErrorInputTextArea, StyledTextarea } from "./styled-components";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  getMsgMessageField?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  getMsgMessageField,
  ...props
}) => {
  return (
    <>
      <StyledTextarea {...props} />
      {getMsgMessageField && (
        <ErrorInputTextArea> Este campo é obrigatório</ErrorInputTextArea>
      )}
    </>
  );
};

export default Textarea;
