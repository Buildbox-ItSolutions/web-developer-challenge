import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Avatar from "../../atoms/avatar/Avatar";
import DeleteIcon from "../../atoms/delete-icon/DeleteIcon";


export type CardInfo = {
    id: string
    image: string
    message?: string
    user?: string
}

export type CardPostType = {
    cards: CardInfo[]
    onClickDeleteIcon?: React.MouseEventHandler<HTMLButtonElement>
}

const CardPost = ({ cards, onClickDeleteIcon }: CardPostType) => {
    const theme = useTheme();
    const windowBelowSmall = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <>
            {cards?.map((card, index): JSX.Element => {
                return (

                    <Box width={windowBelowSmall ? '83vw' : '528px'} height={'auto'}
                        borderRadius='3px'
                        sx={{ backgroundColor: theme.palette.black2.main }}
                        padding='12px 12px 32px 24px'
                        border={`1px solid ${theme.palette.black3.main}`}
                        display='flex'
                        alignItems='center'
                        flexDirection={windowBelowSmall ? 'column' : 'row'}
                        mt='16px'
                        key={index}
                    >
                        <Box mt='20px' order={windowBelowSmall ? 2 : ''}>
                            <Avatar readOnly={true} image={card.image} />
                        </Box>

                        <Box mt={windowBelowSmall?'10px':'48px'} ml={windowBelowSmall ? '0px' : '32px'} display='flex' width={windowBelowSmall ? '300px' : '368px'} flexDirection='column' order={windowBelowSmall ? 3 : ''}>
                            <Typography
                                textAlign='left'
                                lineHeight='1.25'
                                maxHeight='120px'
                                sx={{ wordBreak: 'break-word', overflowY: 'auto', '::-webkit-scrollbar': { display: 'none' } }}
                                color={theme.palette.grey1.main}>{card.message}
                            </Typography>

                            <Box mt='24px'>
                                <Typography fontSize='12px' color={theme.palette.grey2.main}>Enviado por</Typography>
                                <Typography fontSize='14px' lineHeight='1.29' color={theme.palette.grey3.main}>{card.user}</Typography>
                            </Box>
                        </Box>
                        <Box alignSelf={windowBelowSmall ? 'self-end' : 'self-start'} ml={windowBelowSmall ? '' : '30px'} order={windowBelowSmall ? 1 : ''} >
                            <DeleteIcon onClick={onClickDeleteIcon} id={card.id} />
                        </Box>

                    </Box>
                )
            })}


        </>
    )
}
export default CardPost