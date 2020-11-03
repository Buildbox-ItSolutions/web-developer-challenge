export interface Post {
  name: string;
  message: string;
  thumbUrl: string;
  _id?: string;
}

export interface PostContextData {
  name: string;
  message: string;
  thumbUrl: string;
  setName(name: string): void;
  setMessage(message: string): void;
  setThumbUrl(thumbUrl: string): void;
  clearPost(): void;
}
