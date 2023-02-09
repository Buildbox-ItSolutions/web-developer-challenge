import Avatar from "@mui/material/Avatar"
import PhotoUpload from '../../../assets/svg/photo-upload.svg'
import EmptyPhoto from '../../../assets/image.png'
import IconButton from "@mui/material/IconButton"
import React from "react"

export type AvatarPhotoType = {
    image: string,
    onClick?: React.MouseEventHandler<HTMLLabelElement>;
    onUpload?: ((event: React.SyntheticEvent & { currentTarget: HTMLInputElement }) => void);
}

const AvatarPhoto = ({ image, onUpload, onClick }: AvatarPhotoType) => {
    return (
        <>
            <IconButton component='label' onClick={onClick}
                sx={{
                    backgroundImage: `url(${image ? image : PhotoUpload})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '88px', width: '88px', marginBottom: '20px', borderRadius: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Avatar
                    sx={{ height: '24px', width: '24px' }}
                    src={image ? image : EmptyPhoto}

                />
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
export default AvatarPhoto