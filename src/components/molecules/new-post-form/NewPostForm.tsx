import React from "react"
import { Box, TextFieldProps, TextField } from "@mui/material/"
import { useTheme } from "@mui/material/styles"

type NewPostFormType = {
    fieldName?: TextFieldProps
    fieldMessage?: TextFieldProps
}

const NewPostForm = ({ fieldName, fieldMessage }: NewPostFormType): JSX.Element => {
    const theme = useTheme()
    return (
        <>
            <TextField
                {...fieldName}
            />

            <TextField
                {...fieldMessage}
                inputProps={{
                    style: {
                        height: '80px',
                    },
                }}
                sx={{ marginTop: '8px' }}
            />
        </>
    )
}

export default React.memo(NewPostForm)
