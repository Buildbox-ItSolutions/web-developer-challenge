export const getPosts = async () => {
  const response = await fetch("/api/posts");
  const data = await response.json();
  const { projects } = data;
  return projects;
};

export const createPost = async () => {
  const response = await fetch("/api/posts");
  const data = await response.json();
  return data;
};
