export interface PostsProps {
  id: string;
  description: string;
  author: string;
  image: any;
  handleDelete?: () => void;
}
