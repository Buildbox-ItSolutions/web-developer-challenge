export interface User {
  id?: string;
  username: string;
  email: string;
  password?: string;
  PostIds: string[] | null;
}
