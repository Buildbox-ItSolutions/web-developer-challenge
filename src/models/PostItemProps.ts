export interface PostItemProps {
  postData: {
    id?: string;
    name: string;
    message: string;
    previewImage?: {
      name: string;
      url: string;
    };
    image?: File;
    likes: number;
  };
}
