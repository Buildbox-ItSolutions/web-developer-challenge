import { Box, TextFieldProps, TextField } from "@mui/material/"

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

export default NewPostForm
