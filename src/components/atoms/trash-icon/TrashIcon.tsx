import IconButton from '@mui/material/IconButton'
import Trash from "../../../assets/trash.png"

type TrashIconType ={
    onClick?:React.MouseEventHandler<HTMLButtonElement>
}

const TrashIcon = ({onClick}:TrashIconType) =>{
    return (
        <IconButton
        onClick={onClick}
            sx={{
                backgroundImage: `url(${Trash})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '24px',
                height: '24px'
            }}
        />
    )
}
export default TrashIcon