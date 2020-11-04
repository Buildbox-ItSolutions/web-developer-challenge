export interface PostI {
    id?: number;
    image?: string | File | ArrayBuffer | null;
    author?: string;
    message?: string;
  }