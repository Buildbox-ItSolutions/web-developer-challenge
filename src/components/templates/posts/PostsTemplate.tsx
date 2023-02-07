import { Box, ButtonProps, TextFieldProps } from "@mui/material/"
import { useTheme } from "@mui/material/styles"
import AvatarPhoto from "../../atoms/avatar-photo/AvatarPhoto"
import ButtonsDiscardPublish from "../../molecules/buttons-new-post/ButtonsDiscardPublish"
import NewPostForm from "../../molecules/new-post-form/NewPostForm"
import GlobalTemplate from "../global/GlobalTemplate"

type PostsTemplateType = {
    fieldName?: TextFieldProps
    fieldMessage?: TextFieldProps
    buttonDiscard?: ButtonProps
    buttonPublish?: ButtonProps
}

const PostsTemplate = ({ fieldName, fieldMessage, buttonDiscard, buttonPublish }: PostsTemplateType) => {
    const theme = useTheme()
    return (
        <GlobalTemplate>
            <Box width='516px' height='353px'
                borderRadius='3px'
                sx={{ backgroundColor: theme.palette.black2.main }}
                padding='24px'
                border={`1px solid ${theme.palette.black3.main}`}
                display='flex'
                flexDirection='column'
                mt='40px'
            >
                <Box
                    display='flex'
                    width='100%'
                    alignItems='center'
                    justifyContent='center'
                ><AvatarPhoto />
                </Box>
                <NewPostForm
                    fieldName={{ ...fieldName, placeholder: 'Digite seu nome' }}
                    fieldMessage={{ ...fieldMessage, multiline: true, rows: 4, placeholder: 'Mensagem' }} />
                <Box
                    display='flex'
                    width='100%'
                    alignItems='self-end'
                    justifyContent='end'
                    mt='32px'
                >
                    <ButtonsDiscardPublish
                        buttonDiscard={buttonDiscard}
                        buttonPublish={buttonPublish}
                    />
                </Box>
            </Box>
        </GlobalTemplate>
    )
}

export default PostsTemplate