import { createContext, useEffect, useState } from "react";

export interface PostsData {
  id: number;
  image: string;
  name: string;
  text: string;
}

interface PostsContextProps {
  posts: PostsData[];
  setPosts: React.Dispatch<React.SetStateAction<PostsData[]>>;
}

const savePostsLocalStorage = (posts: PostsData[]) => {
  try {
    const postsJSON = JSON.stringify(posts)
    localStorage.setItem('posts', postsJSON);
  } catch (e) {
    console.log('Error saving posts to localStorage: ', e);
  }
}

const getStoredPosts = (): PostsData[] => {
  try {
    if (typeof window !== 'undefined') {
      const storedPostsJSON = localStorage.getItem('posts');
      if(storedPostsJSON) {
        const storedPosts = JSON.parse(storedPostsJSON) as PostsData[];
        return storedPosts;
      }
    }
  } catch (e) {
    console.log('Error retrieving posts from localStorage: ', e);
  }

  return []
}

export const PostsContext = createContext<PostsContextProps>({
  posts: [],
  setPosts: () => {},
})

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<PostsData[]>(getStoredPosts())

  useEffect(() => {
    savePostsLocalStorage(posts)
  },[posts])

  const setPostsWrapper: PostsContextProps['setPosts'] = (newPost) => {
    setPosts((prevPosts) => {
      const updatedPosts = typeof newPost === 'function' ? newPost(prevPosts) : newPost;
      return updatedPosts;
    })
  };

  return (
    <PostsContext.Provider value={{ posts, setPosts: setPostsWrapper }}>
      { children }
    </PostsContext.Provider>
  )
}
