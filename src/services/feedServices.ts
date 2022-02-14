import { Feed } from '../types/feed';
import { api } from './api';

type GetFeed = {
  feed: Feed[];
};

const url = '/feed';

export const getFeed = () => api.get<GetFeed>(url).then(({ data }) => data);

export const postFeed = (body: Feed) =>
  api.post<Feed[]>(url, { ...body }).then(({ data }) => data);

export const deleteFeed = (id: number | string = 0) =>
  api.delete<Feed[]>(`${url}/${id}`).then(({ data }) => data);
