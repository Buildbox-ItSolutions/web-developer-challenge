import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CopyrightComponent from '~/components/Copyright';
import { usePost } from '~/hooks/usePost';
import { NavBarComponent } from '~/components/NavBar';
import { MainCardComponent } from '~/components/MainCard';
import { PostsComponent } from '~/components/Posts';
import { Main } from './style';

export const HomePage = () => {
  const { posts, getAllPosts, createPost, deletePost } = usePost();

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      <NavBarComponent props={{ children: <></> }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Main>
          <Container sx={{ mt: 8, mb: 2 }}>
            <MainCardComponent createPost={createPost} />
            <PostsComponent posts={posts} deletePost={deletePost} />
          </Container>
        </Main>
        <Box
          component='footer'
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
          }}
        >
          <Container maxWidth='sm'>
            <Typography variant='body1'>Web developer challenge.</Typography>
            <CopyrightComponent />
          </Container>
        </Box>
      </Box>
    </>
  );
};
