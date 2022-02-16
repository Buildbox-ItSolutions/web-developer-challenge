import { useCallback } from 'react';
import { api } from '../services/api';
import { Feed } from '../types/feed';

type GetFeed = {
  feed: Feed[];
};

const url = '/feed';

export const useFeedService = () => {
  const getFeed = useCallback(
    () => api.get<GetFeed>(url).then(({ data }) => data),
    [],
  );

  const postFeed = useCallback(
    (body: Feed) => api.post<Feed[]>(url, { ...body }).then(({ data }) => data),
    [],
  );

  const deleteFeed = useCallback(
    (id: number | string = 0) =>
      api.delete<Feed[]>(`${url}/${id}`).then(({ data }) => data),
    [],
  );

  return {
    getFeed,
    postFeed,
    deleteFeed,
  };
};
