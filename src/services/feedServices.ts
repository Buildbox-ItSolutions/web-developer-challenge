import { Feed } from '../types/feed';
import { api } from './api';

type GetFeed = {
  data: Feed;
};

export const getFeed = () => api.get<GetFeed>('/feed').then(({ data }) => data);
