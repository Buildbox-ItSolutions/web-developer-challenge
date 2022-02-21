import React from 'react'
import styled from 'styled-components';
import { GlobalWrapper } from '../GlobalWrapper';
import PostFeed from './PostFeed';   

const ListPosts = ({posts, addPostList}) => {

   const deletePost = (id) => {
       addPostList(posts.filter(post => post.id !== id))
   }

  return (
    <GlobalWrapper>
        <ListPost>
        {posts.length > 0 ? <div className="feed"><h4>Feed</h4></div> : ''}
        <ul>
            {posts.map(post => {
                const {id, name, text} = post;

                return (
                    <PostFeed key={id} id={id} name={name} text={text} deletePost={deletePost}/>
                )

            })}
        </ul>
        </ListPost>
    </GlobalWrapper>
  )
}

const ListPost = styled.section`
    width: 38%;
    position:relative;

    .feed h4{
        font-family: Roboto;
        font-size: font-size: 0.875rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #7a7a7a;
    }

    @media only screen and (max-width:1023px){
        width: 50%;
    }

    @media only screen and (max-width:768px){
        width: 70%;
    }
`;

export default ListPosts