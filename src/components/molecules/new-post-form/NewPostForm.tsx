import { Box, TextFieldProps, TextField } from "@mui/material/"
import React from "react"

type NewPostFormType = {
    fieldName?: TextFieldProps
    fieldMessage?: TextFieldProps
}

const NewPostForm = ({ fieldName, fieldMessage }: NewPostFormType): JSX.Element => {

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
