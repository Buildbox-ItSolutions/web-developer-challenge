import { CardComponent, LoadingComponent } from '@components/index';

import { usePosts } from '@/global/hooks/usePosts';

import * as Styles from './styles';

export const useValidationListPosts = () => {
  const { isLoading, posts } = usePosts();

  const renderSectionPosts = () => {
    if (!posts || posts.length === 0) {
      return (
        <Styles.Wrapper>
          <Styles.Message>
            Não tem nenhuma postagem cadastrada
          </Styles.Message>
        </Styles.Wrapper>
      );
    } else if (isLoading) {
      return (
        <Styles.Wrapper>
          <LoadingComponent />
        </Styles.Wrapper>
      );
    } else {
      return posts.map((post) => (
        <CardComponent key={post.id} post={post} />
      ));
    }
  };

  return {
    renderSectionPosts,
  };
};
