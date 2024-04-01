import { Post } from "@lib/features/posts/postsSlice";

export type CardProps = {
  posting?: boolean;
  removing?: boolean;
  onRemove?: () => void;
} & Post;
