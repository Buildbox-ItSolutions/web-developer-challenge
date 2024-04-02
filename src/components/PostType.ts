export interface PostType {
    name: string;
    message: string;
    photoURL: string | null;
    onDelete: () => void;
  }