import IconButton from '@mui/material/IconButton'
import Delete from "../../../assets/delete.png"

type DeleteIconType ={
    onClick?:React.MouseEventHandler<HTMLButtonElement>
    id?:string
}

const DeleteIcon = ({onClick,id}:DeleteIconType) =>{
    return (
        <IconButton
        id={id}
        onClick={onClick}
            sx={{
                backgroundImage: `url(${Delete})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '20px',
                height: '20px'
            }}
        />
    )
}

export default DeleteIcon