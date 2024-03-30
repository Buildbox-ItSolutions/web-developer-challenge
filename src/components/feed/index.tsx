import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { PostCard } from '../post-card'
import { Container, EmptyState, List } from './styles'
import { fetchPosts } from '../../services/posts/fetch-posts'
import { removePost } from '../../services/posts/remove-post'
import toast from 'react-hot-toast'
import { Post } from '../../@types/post'
import { LoadingFeed } from './components/loading'

export function Feed() {
  const queryClient = useQueryClient()
  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  const { mutate: handleRemovePost } = useMutation({
    mutationFn: removePost,
    onSuccess: (_, { postId }) => {
      toast.success('Post removido com sucesso')
      queryClient.setQueryData<Post[]>(['posts'], (data) => {
        if (data) {
          return data.filter((post) => post.id !== postId)
        }
        return data
      })
    },

    onError: (err) => {
      console.log(err)
      toast.error('Erro ao remover post')
    },
  })

  if (!posts && isLoading) {
    return <LoadingFeed />
  }

  if (posts && posts.length === 0) {
    return (
      <Container>
        <EmptyState>Nenhum post publicado</EmptyState>
      </Container>
    )
  }

  return (
    <Container>
      <h3>Feed</h3>
      <List>
        {posts?.map((post) => (
          <PostCard
            key={post.id}
            {...post}
            onClickRemovePost={() => handleRemovePost({ postId: post.id })}
          />
        ))}
      </List>
    </Container>
  )
}
