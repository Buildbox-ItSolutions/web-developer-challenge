import { SectionTitle } from "./styles";
import { Post } from "_types";
import { PublishedPost } from "../PublishedPost";

interface PostsListProps {
  posts: Post[];
  removePost: (postIndex: number) => any;
}

export const PostsList = ({ posts, removePost }: PostsListProps) => {
  return (
    <>
      {posts.length ? (
        <>
          <SectionTitle>Feed</SectionTitle>
          {posts.map(({ message, name, photo }, index) => (
            <PublishedPost
              key={index}
              message={message}
              name={name}
              photo={photo}
              onRemove={() => removePost(index)}
            />
          ))}
        </>
      ) : null}
    </>
  );
};
