import { Box, Button, Card, CardContent, CardMedia, Grid, Icon, Typography } from '@mui/material';
import DeleteIcon from '../../../../public/delete.svg';
import { Post } from '~/types/Post';

interface CardProps {
  post: Post;
  deletePost: (id: number) => Promise<void>;
}

export const PostCardComponent = ({ post, deletePost }: CardProps) => {
  return (
    <Grid container justifyContent={'center'} mt={1}>
      <Card sx={{ width: '100%', p: 1, minWidth: '516px' }}>
        <Grid item xs={12}>
          <Box display={'flex'} flexDirection={'row'} width={'100%'} justifyContent={'flex-end'}>
            <Button
              variant='text'
              color='inherit'
              sx={{ m: '5px', minWidth: '28px' }}
              onClick={() => deletePost(post.id!)}
            >
              <Icon sx={{ width: '24px', height: '28px' }}>
                <img src={DeleteIcon} alt='bx-icon' />
              </Icon>
            </Button>
          </Box>
          <Box display={'flex'} flexDirection={'row'} width={'100%'}>
            <CardMedia
              component='img'
              sx={{
                ml: '24px',
                mr: '32px',
                objectFit: 'fill',
                height: '88px',
                width: '88px',
                borderRadius: '33px',
              }}
              image={post.image}
              alt={post.name}
            />
            <CardContent>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant='h1'>{post.description}</Typography>
                <Typography variant='h3' pt={'24px'}>
                  Enviado por
                </Typography>
                <Typography variant='h2'>{post.name}</Typography>
              </Box>
            </CardContent>
          </Box>
        </Grid>
      </Card>
    </Grid>
  );
};
