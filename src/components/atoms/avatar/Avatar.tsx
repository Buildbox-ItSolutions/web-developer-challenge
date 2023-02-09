import {memo} from "react"
import MuiAvatar from "@mui/material/Avatar"
import PhotoUpload from '../../../assets/svg/photo-upload.svg'
import EmptyPhoto from '../../../assets/image.png'
import IconButton from "@mui/material/IconButton"
import { SxProps } from "@mui/material/styles"



export type AvatarType = {
    image: string,
    readOnly?: boolean
    onUpload?: ((event: React.SyntheticEvent<Element, Event> & { currentTarget: HTMLInputElement }) => void);
    sx?:SxProps
}

const Avatar = ({ image, onUpload, readOnly,sx}: AvatarType) => {
    return (
        <>
            <IconButton component='label' disabled={readOnly}
                sx={{
                    backgroundImage: `url(${image ? image : PhotoUpload})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '88px', width: '88px', marginBottom: '20px', borderRadius: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {!image ?
                    <MuiAvatar
                        sx={{ height: '24px', width: '24px' }}
                        src={EmptyPhoto}
                    />
                    : null!
                }

                <input
                    style={{ display: 'none' }}
                    type="file"
                    accept="image/*"
                    onChange={onUpload}
                    hidden
                />
            </IconButton>
        </>

    )
}
export default memo(Avatar)