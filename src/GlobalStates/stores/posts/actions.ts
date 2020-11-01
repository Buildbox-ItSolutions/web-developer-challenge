export const TypesPost = {
  ADD_POST: "@post/ADD_POST",
  DELETE_POST: "@post/DELETE_POST",
};

export function addPost(payload: {
  image: string;
  name: string;
  message: string;
}) {
  return {
    type: TypesPost.ADD_POST,
    payload,
  };
}

export function deletePost(payload: { index: number }) {
  return {
    type: TypesPost.ADD_POST,
    payload,
  };
}
