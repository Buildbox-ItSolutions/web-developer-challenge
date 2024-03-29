import React, { TextareaHTMLAttributes }  from 'react'
import { TextAreaStyled } from './TextAreaStyles'


interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    
}
  
  const TextArea: React.FC<TextAreaProps> = ({ ...restProps }) => {
    return <TextAreaStyled {...restProps}/>
  }

export default TextArea