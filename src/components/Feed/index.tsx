import {Posts} from "components/Posts";
import styled  from "styled-components";
import { Dispatch, SetStateAction } from "react";
import { InPost } from "pages/Main";

interface IListPosts {
    posts: InPost[];
    setPosts: Dispatch<SetStateAction<InPost[]>>;
}

interface IList {
  data: IListPosts;
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 516px;
`;
const Text = styled.h1`
    color:white;
    margin-left:-26vw;
    margin-top:56px;
    margin-bottom: -20px;
`;
export const ListPosts = ({ data }: IList) => {
    const { posts, setPosts } = data;
    const deletePost = (post: InPost) => {
      const filterPosts = posts.filter(
        (selectedpost) => selectedpost.id !== post.id
      );
      setPosts(filterPosts);
    };
  
    return (
      <Content>
        <Text>Feed</Text>
        {posts.map((post) => (
        <Posts key={post.id} data={post} deletePost={deletePost} />
        ))}
      </Content>
    );
};