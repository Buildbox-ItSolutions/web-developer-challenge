import React from 'react'

import { Props, Textarea } from '.'

const TextArea: React.FC<Props> = ({ ...rest }) => {
  return <Textarea maxLength={165} {...rest} />
}

export default TextArea
