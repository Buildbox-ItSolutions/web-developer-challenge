import React, { useState } from 'react';
import { Box, Button, Card, Grid, Icon, TextField } from '@mui/material';
import { InputTextAreaWrapper, InputTextWrapper } from './style';
import { Post } from '~/types/Post';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { CenteredContent } from './style';
import ImgIcon from '../../../public/image.svg';
import TrashIcon from '../../../public/trash.svg';
interface CardProps {
  createPost: (post: Post) => Promise<void>;
}

export const MainCardComponent = ({ createPost }: CardProps) => {
  const [imageUpload, setImageUpload] = React.useState<ImageListType>();

  const [post, setPost] = useState<Post>({
    name: '',
    description: '',
    image: '',
  });

  const onChangeImage = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    console.log(imageList, addUpdateIndex);
    setImageUpload(imageList);
    setPost({ ...post, image: imageList[0].dataURL as string });
  };

  const handleChange = (e: any) => {
    const newData: any = { ...post };
    newData[e.target.name] = e.target.value;
    setPost(newData);
  };

  const handleSubmit = () => {
    createPost(post);
    clearPost();
  };

  const clearPost = () => {
    setPost({
      name: '',
      description: '',
      image: '',
    });
  };

  return (
    <Card sx={{ width: '100%', minWidth: '516px' }}>
      <Grid justifyContent={'center'}>
        <Grid item xs={12}>
          <CenteredContent>
            <ImageUploading value={imageUpload!} onChange={onChangeImage} maxNumber={1}>
              {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, dragProps }) => (
                <>
                  <Box sx={{ pt: '24px', pb: '16px' }}>
                    {imageList.length ? (
                      <Button
                        variant='outlined'
                        {...dragProps}
                        onClick={() => onImageUpdate(0)}
                        sx={{
                          borderRadius: '30px',
                          p: 0,
                          m: 0,
                        }}
                      >
                        <Icon sx={{ width: '88px', height: '88px' }}>
                          <img
                            src={imageList[0].dataURL}
                            alt=''
                            width='88px'
                            height='88px'
                            style={{ borderRadius: '33px' }}
                          />
                        </Icon>
                      </Button>
                    ) : (
                      <Button
                        variant='outlined'
                        onClick={onImageUpload}
                        {...dragProps}
                        sx={{
                          p: '32px',
                          borderRadius: '30px',
                        }}
                      >
                        <Icon sx={{ width: '24px', height: '24px' }}>
                          <img src={ImgIcon} alt='bx-icon' />
                        </Icon>
                      </Button>
                    )}
                    <Button
                      variant='text'
                      color='inherit'
                      onClick={onImageRemoveAll}
                      sx={{ m: '5px', minWidth: '28px' }}
                    >
                      <Icon sx={{ width: '24px', height: '28px' }}>
                        <img src={TrashIcon} alt='bx-icon' />
                      </Icon>
                    </Button>
                  </Box>
                </>
              )}
            </ImageUploading>
          </CenteredContent>
        </Grid>
        <Grid item xs={12}>
          <InputTextWrapper>
            <TextField
              fullWidth
              placeholder='Digite seu nome'
              name='name'
              value={post.name}
              onChange={handleChange}
            />
          </InputTextWrapper>
          <InputTextAreaWrapper>
            <TextField
              fullWidth
              multiline
              name='description'
              maxRows={2}
              value={post.description}
              placeholder='Mensagem'
              onChange={handleChange}
            />
          </InputTextAreaWrapper>
        </Grid>
        <Grid item xs={12}>
          <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-end'}
            mt={'32px'}
            mb={'16px'}
            mr={'24px'}
          >
            <Button
              variant='text'
              color='inherit'
              sx={{
                textTransform: 'none',
                color: '#5f5f5f',
                textDecoration: 'underline',
              }}
              onClick={clearPost}
            >
              Descartar
            </Button>
            <Button
              variant='contained'
              color='success'
              disabled={!post.description.length}
              sx={{ textTransform: 'none', color: '#FFF', ml: '24px' }}
              onClick={handleSubmit}
            >
              Publicar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
