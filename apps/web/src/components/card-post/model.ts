import { Author } from '../../models/posts';

export type CardPostProps = {
  message: string;
  author: Author;
  onRemove: () => void;
};
