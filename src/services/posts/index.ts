import { InMemoryPostService } from './implementations/InMemoryStoragePostService';
import { IPostService } from './IPostService';

// export const postService: IPostService = new LocalStoragePostService();
export const postService: IPostService = new InMemoryPostService();
