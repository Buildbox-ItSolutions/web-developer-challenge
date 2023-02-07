import Avatar from "@mui/material/Avatar"
import PhotoUpload from '../../../assets/svg/photo-upload.svg'
import EmptyPhoto from '../../../assets/image.png'
import Box from "@mui/material/Box"

const AvatarPhoto = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${PhotoUpload})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '88px', width: '88px', marginBottom: '20px', borderRadius: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Avatar
                    onClick={() => console.log('teste')}
                    sx={{ height: '24px', width: '24px' }}
                    src={EmptyPhoto}

                />
            </Box>


        </>

    )
}
export default AvatarPhoto