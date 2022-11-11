import React from 'react';
import { Comment } from './Comment';
import { FormContent } from './FormContent';
import { useState } from 'react';



export function Widget(){

    const [post, setPost] = useState<any[]>([]);

    return(
        <div>
            <FormContent
                post={post}
                onCreatePost={setPost}
            />

            <Comment
                posts={post}
                onDeletePost={setPost}
            />
        </div>
    );
}