import { SxProps } from "@mui/material/styles"
import TextFieldMui, { TextFieldProps } from "@mui/material/TextField"

export type TextFieldType = {
    fields: TextFieldProps[]
    sx?:SxProps
}

const TextFields = ({ fields,sx }: TextFieldType) => {
    return (
        <>

            {
                fields.map((fieldProps: TextFieldProps,index) => {
                    return (
                        <TextFieldMui key={index} sx={sx?sx:null!}  {...fieldProps} />
                    )
                })}
        </>
    )
}

export default TextFields