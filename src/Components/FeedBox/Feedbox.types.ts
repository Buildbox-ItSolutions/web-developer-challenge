export interface FeedboxProps {
  name: string;
  text: string;
  profileImage: string;
  uploadedImage?: string;
  id?: number;
  handleRemoveItem?: () => void;
}
