interface IPostProps {
    id: number;
    name: string;
    message: string;
    imageUrl: string | null;
    onDelete: (id: number) => void;
  }