/* Types */
import { PostsProps } from 'types/posts';

export interface PublishPostsProps {
  newPost: PostsProps;
  handleClean: () => void;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleAdding: () => void;
}
