export interface IPost {
  id?: string;
  name: string;
  message: string;
  previewImage?: { 
    name: string; 
    url: string 
  };
  image?: File;
}