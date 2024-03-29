import { TextareaHTMLAttributes } from "react";
import { TextAreaContainer } from "./textAreaStyled";


interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
const TextArea = ({...props}: TextAreaProps) => {
    return <TextAreaContainer {...props}/>
}
 
export default TextArea;