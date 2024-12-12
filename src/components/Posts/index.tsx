import { Box, Typography } from '@mui/material';
import { Post } from '~/types/Post';
import { PostCardComponent } from './Card';

interface PostProps {
  posts: Post[];
  deletePost: (id: number) => Promise<void>;
}

export const PostsComponent = ({ posts, deletePost }: PostProps) => {
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        mt={'56px'}
        mb={'16px'}
        sx={{ width: '100%' }}
      >
        <Typography variant='h2'>Feed</Typography>
      </Box>
      {posts.length ? (
        <>
          {posts.map((post: Post) => (
            <PostCardComponent key={post.id} post={post} deletePost={deletePost} />
          ))}
        </>
      ) : (
        <Typography>Sem posts</Typography>
      )}
    </>
  );
};
