import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography";
import Avatar, { AvatarType } from "../../atoms/avatar/Avatar";
import DeleteIcon from "../../atoms/delete-icon/DeleteIcon";


export type CardInfo = {
    id:string
    image: string
    message?: string
    user?: string
}

export type CardPostType = {
    cards: CardInfo[]
    onClickDeleteIcon?:React.MouseEventHandler<HTMLButtonElement>
}

const CardPost = ({ cards,onClickDeleteIcon }: CardPostType) => {
    const theme = useTheme();
    return (
        <>
            {cards?.map((card, index): JSX.Element => {
                return (
                    <Box width='528px' height='225px'
                        borderRadius='3px'
                        sx={{ backgroundColor: theme.palette.black2.main }}
                        padding='0px 12px 0px 24px'
                        border={`1px solid ${theme.palette.black3.main}`}
                        display='flex'
                        alignItems='center'
                        mt='16px'
                        key={index}
                    >
                        <Avatar readOnly={true} image={card.image} />

                        <Box ml='32px' display='flex' width='348px' flexDirection='column'>
                            <Typography textAlign='left' lineHeight='1.25' color={theme.palette.grey1.main}>{card.message}</Typography>
                            <Box mt='24px'>
                                <Typography fontSize='12px' color={theme.palette.grey2.main}>Enviado por</Typography>
                                <Typography fontSize='14px' lineHeight='1.29' color={theme.palette.grey3.main}>{card.user}</Typography>
                            </Box>
                        </Box>
                        <Box alignSelf='self-start' mt='12px' ml='60px' >
                        <DeleteIcon onClick={onClickDeleteIcon} id={card.id}/>
                        </Box>
                    
                    </Box>
                )
            })}


        </>
    )
}
export default CardPost