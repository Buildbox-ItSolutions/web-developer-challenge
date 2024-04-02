export interface PostType {
  id: string;
  name: string;
  message: string;
  photoURL: string | null;
  onDelete: () => void;
}