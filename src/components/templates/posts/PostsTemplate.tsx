import { Box, ButtonProps, TextFieldProps, Typography } from "@mui/material/"
import { useTheme } from "@mui/material/styles"
import {useMediaQuery} from "@mui/material"
import AvatarPhoto from "../../atoms/avatar/Avatar"
import TrashIcon from "../../atoms/trash-icon/TrashIcon"
import ButtonsDiscardPublish from "../../molecules/buttons-discard-publish/ButtonsDiscardPublish"
import CardPost, { CardInfo } from "../../molecules/card-post/CardPost"
import NewPostForm from "../../molecules/new-post-form/NewPostForm"
import GlobalTemplate from "../global/GlobalTemplate"


type PostsTemplateType = {
    fieldImage: string
    fieldName?: TextFieldProps
    fieldMessage?: TextFieldProps
    buttonDiscard?: ButtonProps
    buttonPublish?: ButtonProps
    posts: CardInfo[]
    removeImageOnclick?: React.MouseEventHandler<HTMLButtonElement>
    onClickDeleteIcon?: React.MouseEventHandler<HTMLButtonElement>
    onUploadAvatar: ((event: React.SyntheticEvent<Element, Event> & { currentTarget: HTMLInputElement }) => void)
}

const PostsTemplate = ({ fieldImage, fieldName, fieldMessage, buttonDiscard, buttonPublish, onUploadAvatar, removeImageOnclick,onClickDeleteIcon,posts }: PostsTemplateType) => {
    const theme = useTheme()
    const windowBelowSmall = useMediaQuery(theme.breakpoints.down('sm'))
   
    return (
        <GlobalTemplate>
            <>
                <Box width={windowBelowSmall?'80vw':'516px'} height={windowBelowSmall?'400px':'353px'}
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
                    >
                        <AvatarPhoto image={fieldImage} onUpload={onUploadAvatar} />

                        {fieldImage ?
                            <Box height='100%' ml='16px' mr='-44px' mt='56px'>
                                <TrashIcon onClick={removeImageOnclick} />
                            </Box>
                            : null!
                        }

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
                            sx={{
                                flexDirection:windowBelowSmall?'column':'row',
                                width:windowBelowSmall?'100%':undefined,
                                height:'50px',
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                            sxButtons={{
                                width:windowBelowSmall?'100%':undefined,
                                margin:'5px'
                            }}
                        />
                    </Box>
                </Box>
                <Box display='flex' alignItems='flex-start' justifyContent='flex-start' mt='56px' flexDirection='column'>
                    <Typography color={theme.palette.grey3.main}>
                        Feed
                    </Typography>
                </Box>
                <Box mt='-16px'
                    mb={posts?.length > 1 ? '170px' : '10px'}
                >

                    <CardPost onClickDeleteIcon={onClickDeleteIcon} cards={posts} />
                </Box>
            </>
        </GlobalTemplate>
    )
}

export default PostsTemplate