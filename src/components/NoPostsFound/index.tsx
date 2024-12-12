import { NoPostsFoundContainer, NoPostsFoundText } from './style'

export function NoPostsFound() {
  return (
    <NoPostsFoundContainer>
      <NoPostsFoundText>
        Nenhum post ainda <span>:&#40;</span>
      </NoPostsFoundText>
    </NoPostsFoundContainer>
  )
}
