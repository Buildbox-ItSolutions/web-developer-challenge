import { LocalStoragePostService } from './implementations/LocalStoragePostService';
import { IPostService } from './IPostService';

export const postService: IPostService = new LocalStoragePostService();
