import * as React from 'react';

import styled from 'styled-components';
import Input from '@/components/Input';

import type { Props as InputProps } from '@/components/Input';

const StyledTextArea = styled(Input)`
  height: unset;
`;

const TextArea = React.forwardRef(
  (
    props: React.HTMLAttributes<HTMLTextAreaElement> & InputProps,
    ref: React.Ref<HTMLTextAreaElement>,
  ) => {
    return <StyledTextArea as="textarea" ref={ref} {...props} />;
  },
);

export default TextArea;
