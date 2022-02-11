import React from 'react';

import styled from 'styled-components';
import Input from '@/components/Input';

const StyledTextArea = styled(Input)`
  height: unset;
`;

function TextArea(props: React.HTMLAttributes<HTMLTextAreaElement>) {
  return <StyledTextArea as="textarea" {...props} />;
}

export default TextArea;
