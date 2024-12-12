import { createContext, ReactNode, useEffect, useState } from "react";
import { removePostImageFromFirebase, savePostImageToFirebase } from "../api";
import { PostModel } from "../Interfaces/PostInterfaces";

interface PostContextInitialValue {
  savePost(post: PostModel, image?: File): Promise<void>,
  removePost(post: PostModel): Promise<void>,
  getPosts(): PostModel[],
  postLoading: boolean
}

export const PostContext = createContext({} as PostContextInitialValue);

interface PostProviderProps {
  children: ReactNode
}

const LOCAL_STORAGE_KEY = 'POST_KEY';

export default function PostProvider({ children }: PostProviderProps) {

  const [posts, setPosts] = useState<PostModel[]>([]);
  const [postLoading, setLoading] = useState(false);

  async function fetchPosts() {
    setLoading(true);
    const stringResult = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!stringResult) { return }

    setPosts(JSON.parse(stringResult));
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  async function savePost(post: PostModel, image?: File) {
    setLoading(true);
    let result = getPost(post.id);
    // setPosts([...posts, {...post, id: result?.id || new Date().getTime().toString()}]);
    const postUpdated = {
      ...post,
      id: result?.id || new Date().getTime().toString()
    }

    await savePostImageToFirebase(postUpdated, image)
      .then(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([postUpdated, ...getPosts()]))
        fetchPosts();
      }).finally(() => {
        setLoading(false);
      });
  }

  function getPost(id?: string) {
    if (!id) { return }
    const postResult = getPosts();

    return postResult.filter(post => post.id === id).shift();
  }

  function getPosts() {
    const postResult = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!postResult) { return [] }

    return JSON.parse(postResult) as PostModel[];
  }

  async function removePost(post: PostModel) {
    !!post.imageUrl && await removePostImageFromFirebase(post)

    localStorage.setItem(LOCAL_STORAGE_KEY,
      JSON.stringify(getPosts().filter((postData) => postData.id != post.id)));
    fetchPosts();
  }

  return (
    <PostContext.Provider value={{ savePost, getPosts, removePost, postLoading }} >
      {children}
    </PostContext.Provider>
  )
}