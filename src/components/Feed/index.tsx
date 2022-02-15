import React from "react";
import { usePosts } from "../../hooks/usePosts";
import FeedPost from "../FeedPost";
import * as S from './styles'

export function Feed(){
    
    const { posts } = usePosts();
    console.log(posts)

    return(
        <S.Wrapper>
            {posts.length !== 0 ? 
                <><h2>Feed</h2><S.WrapperList>
                    {posts?.map(post => (
                        <FeedPost key={post.id} {...post} />
                    ))}
                </S.WrapperList></>
            :
            <div className='noPosts'>Tente adicionar um post primeiro....</div>
            
        }
        </S.Wrapper>
    )
}