import React from 'react'

import { Props, Textarea } from '.'

const TextArea: React.FC<Props> = ({ ...rest }) => {
  return <Textarea maxLength={165} {...rest} data-cy="cy-textarea" />
}

export default TextArea
