import { GetPostsQuery } from '../contracts/postContracts';

export const QueryKeys = {
  posts: (query?: GetPostsQuery) => ['posts', query],
};
